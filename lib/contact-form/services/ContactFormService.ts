import { BaseFormData, ContactFormConfig, FormFieldValue, FormSubmissionResponse } from "../types";

export class ContactFormService {
    private apiUrl: string;
  private templateName: string;
  private recipientEmail: string;
  
    constructor(config: ContactFormConfig) {
      this.apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      this.templateName = config.templateName;
      this.recipientEmail = config.recipientEmail;
    }
  
    async submitForm(formData: BaseFormData): Promise<FormSubmissionResponse> {
      try {
        const response = await fetch(`${this.apiUrl}/api/Email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            templateName: this.templateName,
            to: this.recipientEmail,
            templateData: this.processFormData(formData)
          })
        });
  
        if (!response.ok) {
          throw new Error('Submission failed');
        }
  
        return {
          success: true,
          message: 'Form submitted successfully'
        };
      } catch (error) {
        console.error('Form submission error:', error);
        return {
          success: false,
          message: error instanceof Error ? error.message : 'Failed to submit form'
        };
      }
    }
  
    private processFormData(formData: BaseFormData): Record<string, FormFieldValue> {
            const processed: Record<string, FormFieldValue> = {};
      
      for (const [key, value] of Object.entries(formData)) {
        if (value === null || value === undefined) continue;
        
        if (Array.isArray(value)) {
          processed[key] = value;
        } else if (typeof value === 'object') {
          processed[key] = value;
        } else {
          processed[key] = String(value).trim();
        }
      }
      
      return {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        ...processed
      };
    }
  }
  