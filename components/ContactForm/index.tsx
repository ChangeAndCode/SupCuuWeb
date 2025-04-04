'use client';
import { useState, useEffect } from 'react';
import { FormField } from '@/components/FormField';
import { FormStatus } from '@/components/FormStatus';
import { ContactFormService, useContactForm } from '@/lib/contact-form';
import { INNOVATION_FORM_CONTENT } from './constants';
import type { FormErrors, InnovationFormData, FormConfig } from '@/types/contact-form';
interface FormProps {
  locale: string;
}
export default function InnovationForm( { locale }: FormProps ) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const basePath = process.env.NEXT_PUBLIC_CONTACT_FORM_PATH_3 || '/contact-form/3';
        const response = await fetch(`/api/umbraco?path=${basePath}/&culture=${locale}`, {
          cache: 'no-cache'
        });
        const data = await response.json();
        setFormConfig(data.properties);
      } catch (error) {
        console.error('Failed to fetch form config:', error);
      }
    };

    fetchConfig();
    setMounted(true);
  }, []);

  const initialState: InnovationFormData = {
    name: '',
    specialization: '',
    topics: '',
    supportType: '',
    email: '',
    phone: ''
  };

  const contactService = new ContactFormService({
    templateName: formConfig?.emailTemplate || 'contact-form',
    recipientEmail: process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL || '',
    apiUrl: process.env.NEXT_PUBLIC_API_URL || ''
  });

  const {
    formData,
    isSubmitting,
    status,
    handleChange,
    handleSubmit: onSubmit
  } = useContactForm<InnovationFormData>(contactService, initialState);

  const validateForm = (data: InnovationFormData): FormErrors => {
    const errors: FormErrors = {};
    
    if (!data.name?.trim()) errors.name = 'Name is required';
    if (!data.email?.trim()) errors.email = 'Email is required';
    if (!data.phone?.trim()) errors.phone = 'Phone is required';
    if (!data.specialization?.trim()) errors.specialization = 'Specialization is required';
    if (!data.topics?.trim()) errors.topics = 'Topics is required';
    if (!data.supportType?.trim()) errors.supportType = 'Support type is required';
    
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email format';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    await onSubmit(e);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
      </div>
    );
  }

  const config = formConfig || {
    formTitle: INNOVATION_FORM_CONTENT.title,
    nameFieldTag: INNOVATION_FORM_CONTENT.fields.name.label,
    emailFieldTag: INNOVATION_FORM_CONTENT.fields.email.label,
    phoneFieldTag: INNOVATION_FORM_CONTENT.fields.phone.label,
    customContactFormFields: {
      items: [
        {
          content: {
            properties: {
              customFormFieldTitle: INNOVATION_FORM_CONTENT.fields.specialization.label,
              customFormDropdownField: INNOVATION_FORM_CONTENT.fields.specialization.options
            }
          }
        },
        {
          content: {
            properties: {
              customFormFieldTitle: INNOVATION_FORM_CONTENT.fields.topics.label,
              customFormDropdownField: INNOVATION_FORM_CONTENT.fields.topics.options
            }
          }
        },
        {
          content: {
            properties: {
              customFormFieldTitle: INNOVATION_FORM_CONTENT.fields.supportType.label,
              customFormDropdownField: INNOVATION_FORM_CONTENT.fields.supportType.options
            }
          }
        }
      ]
    },
    defaultSendButtonText: INNOVATION_FORM_CONTENT.submitStates.default,
    sendingSendButtonText: INNOVATION_FORM_CONTENT.submitStates.sending,
    successSendButtonText: INNOVATION_FORM_CONTENT.submitStates.success,
    errorSendButtonText: INNOVATION_FORM_CONTENT.submitStates.error,
    descriptiveTexts: INNOVATION_FORM_CONTENT.supportInfo
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[clamp(3rem,7vw,5.5rem)] leading-tight font-PerformanceMark text-ColorPrincipal mb-4 whitespace-pre-line">
          {config.formTitle}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Main form fields section */}
          <div className="space-y-6">
            <FormField
              label={config.nameFieldTag}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required={true}
              error={errors.name}
              disabled={isSubmitting}
            />

            {config.customContactFormFields.items.map((field, index) => (
              <FormField
                key={index}
                label={field.content.properties.customFormFieldTitle}
                name={index === 0 ? "specialization" : index === 1 ? "topics" : "supportType"}
                type="select"
                value={index === 0 ? formData.specialization : index === 1 ? formData.topics : formData.supportType}
                onChange={handleChange}
                required={true}
                error={index === 0 ? errors.specialization : index === 1 ? errors.topics : errors.supportType}
                disabled={isSubmitting}
                options={field.content.properties.customFormDropdownField}
              />
            ))}
          </div>

          {/* Contact info and decorative text section */}
          <div className="flex flex-col lg:flex-row gap-6 xl:gap-12">
            <div className="lg:flex-1 xl:max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-8">
                <FormField
                  label={config.emailFieldTag}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                  error={errors.email}
                  disabled={isSubmitting}
                />

                <FormField
                  label={config.phoneFieldTag}
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required={true}
                  error={errors.phone}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex hidden sm:block md:flex lg:flex-col xl:flex justify-between lg:justify-start flex-wrap gap-0.5 lg:min-w-[200px] xl:min-w-[250px]">
              {config.descriptiveTexts.map((text, index) => (
                <div 
                  key={index} 
                  className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold uppercase whitespace-nowrap"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Submit button aligned with form width */}
          <div className="lg:flex-1 ">
            <FormStatus
              isSubmitting={isSubmitting}
              submitError={status?.success === false ? config.errorSendButtonText : null}
              isSuccess={status?.success}
              defaultText={config.defaultSendButtonText}
              submittingText={config.sendingSendButtonText}
              successText={config.successSendButtonText}
              errorText={config.errorSendButtonText}
            />
          </div>

        
        </form>
      </div>
    </div>
  );
}