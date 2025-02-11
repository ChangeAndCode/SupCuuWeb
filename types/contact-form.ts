// types/contact-form.ts
import { BaseFormData } from '@/lib/contact-form';
export interface FormConfig {
    formTitle: string | null;
    formSubtitle: string | null;
    nameFieldTag: string;
    emailFieldTag: string;
    phoneFieldTag: string;
    emailTemplate: string;
    customContactFormFields: {
      items: Array<{
        content: {
          properties: {
            customFormFieldTitle: string;
            customFormDropdownField: string[];
          };
        };
      }>;
    };
    descriptiveTexts: string[];
    defaultSendButtonText: string;
    sendingSendButtonText: string;
    successSendButtonText: string;
    errorSendButtonText: string;
  }
  
  export interface InvestFormData extends BaseFormData {
    specialization: string;
    topics: string;
  }
  
  export interface InnovationFormData extends BaseFormData {
    specialization: string;
    topics: string;
    supportType: string;
  }
  
  export interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    specialization?: string;
    topics?: string;
    supportType?: string;
  }
  
  // Re-export BaseFormData type if needed by other components
  export type { BaseFormData } from '@/lib/contact-form';