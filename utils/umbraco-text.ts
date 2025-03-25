// utils/umbraco-text.ts

import { JSDOM } from 'jsdom';
import type {
  TextElement,
  StringTextElement,
  RichTextElement,
} from '@/types/common/text-elements';

export function isStringTextElement(
  element: TextElement
): element is StringTextElement {
  return element.content.contentType === 'stringTextElement';
}

export function isRichTextElement(
  element: TextElement
): element is RichTextElement {
  return element.content.contentType === 'richTextElement';
}

export function getTextContent(element: TextElement): string {
  if (isStringTextElement(element)) {
    return element.content.properties.stringText;
  }
  if (isRichTextElement(element)) {
    return element.content.properties.richText.markup;
  }
  return '';
}

// Helper to get plain text from rich text markup (selectively strips HTML)
export function stripHtml(markup: string): string {
  // Allow only <b>, <i>, <strong>, <em> tags
  const allowedTags = ['b', 'i', 'strong', 'em'];
  const tagRegex = /<(?!(?:\/)?(?:b|i|strong|em)\b)[^>]+>/gi;
  let strippedMarkup = markup.replace(tagRegex, '');

  // Replace common HTML entities with their character equivalents
  strippedMarkup = strippedMarkup.replace(/&nbsp;/gi, ' ');
  strippedMarkup = strippedMarkup.replace(/&amp;/gi, '&');
  strippedMarkup = strippedMarkup.replace(/&lt;/gi, '<');
  strippedMarkup = strippedMarkup.replace(/&gt;/gi, '>');
  strippedMarkup = strippedMarkup.replace(/&quot;/gi, '"');
  strippedMarkup = strippedMarkup.replace(/&apos;/gi, "'"); // Or use "&#39;"

  return strippedMarkup;
}

// Helper to get text content and optionally strip HTML from rich text
export function getText(
  element: TextElement,
  stripHtmlTags: boolean = false
): string {
  const content = getTextContent(element);
  return stripHtmlTags && isRichTextElement(element)
    ? stripHtml(content)
    : content;
}

// Helper to safely get text from an array of text elements
export function getFirstText(
  items: TextElement[] | undefined,
  stripHtmlTags: boolean = false,
  fallback: string = ''
): string {
  if (!items?.length) return fallback;
  return getText(items[0], stripHtmlTags);
}
