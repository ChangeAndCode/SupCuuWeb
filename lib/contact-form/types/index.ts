export type FormFieldValue = string | number | boolean | object | string[];

export interface BaseFormData {
  name: string;
  email: string;
  phone: string;
  [key: string]: FormFieldValue;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
}

export interface ContactFormConfig {
  apiUrl: string;
  templateName: string;
  recipientEmail: string;
}