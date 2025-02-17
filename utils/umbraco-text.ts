// utils/umbraco-text.ts
import type { TextElement, StringTextElement, RichTextElement } from '@/types/common/text-elements';

export function isStringTextElement(element: TextElement): element is StringTextElement {
  return element.content.contentType === 'stringTextElement';
}

export function isRichTextElement(element: TextElement): element is RichTextElement {
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

// Helper to get plain text from rich text markup (strips HTML)
export function stripHtml(markup: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = markup;
  return tmp.textContent || tmp.innerText || '';
}

// Helper to get text content and optionally strip HTML from rich text
export function getText(element: TextElement, stripHtmlTags: boolean = false): string {
  const content = getTextContent(element);
  return stripHtmlTags && isRichTextElement(element) ? stripHtml(content) : content;
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