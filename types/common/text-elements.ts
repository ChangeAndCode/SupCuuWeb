export interface StringTextElement {
  content: {
    contentType: 'stringTextElement';
    id: string;
    properties: {
      stringText: string;
    };
  };
  settings: null;
}

export interface RichTextElement {
  content: {
    contentType: 'richTextElement';
    id: string;
    properties: {
      richText: {
        markup: string;
        blocks: Array<unknown>; // You can expand this type based on your block types
      };
    };
  };
  settings: null;
}

export type TextElement = StringTextElement | RichTextElement;