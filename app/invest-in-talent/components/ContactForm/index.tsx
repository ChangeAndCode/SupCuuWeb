'use client';
import { useState, useEffect } from 'react';
import { FormField } from './FormField';
import { FormStatus } from '@/components/FormStatus';
import Image from 'next/image';
import { CONTACT_FORM_CONTENT } from './constants';
import { ContactFormService, useContactForm } from '@/lib/contact-form';
import { FormConfig, FormErrors, InvestFormData } from '@/types/contact-form';

const validateForm = (data: InvestFormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.name?.trim()) errors.name = 'Name is required';
  if (!data.email?.trim()) errors.email = 'Email is required';
  if (!data.phone?.trim()) errors.phone = 'Phone is required';
  if (!data.specialization?.trim()) errors.specialization = 'Specialization is required';
  if (!data.topics?.trim()) errors.topics = 'Topics is required';
  
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  return errors;
};

export const ContactForm = () => {
  const [mounted, setMounted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const basePath = process.env.NEXT_PUBLIC_CONTACT_FORM_PATH_2 || '/contact-form/2';
        const response = await fetch(`/api/umbraco?path=${basePath}/`, {
          next: { revalidate: 60 }
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

  const initialState: InvestFormData = {
    name: '',
    email: '',
    phone: '',
    specialization: '',
    topics: ''
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
  } = useContactForm<InvestFormData>(contactService, initialState);

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
      <div className="relative bg-transparent -mt-40 -top-40">
        <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
      </div>
    );
  }

  const config = formConfig || {
    formTitle: CONTACT_FORM_CONTENT.header.title,
    formSubtitle: CONTACT_FORM_CONTENT.header.subtitle,
    nameFieldTag: CONTACT_FORM_CONTENT.fields.name,
    emailFieldTag: CONTACT_FORM_CONTENT.fields.email,
    phoneFieldTag: CONTACT_FORM_CONTENT.fields.phone,
    emailTemplateName: 'contact-form',
    customContactFormFields: {
      items: [
        {
          content: {
            properties: {
              customFormFieldTitle: CONTACT_FORM_CONTENT.fields.specialization,
              customFormDropdownField: ["AREA 1", "AREA 2", "AREA 3"]
            }
          }
        },
        {
          content: {
            properties: {
              customFormFieldTitle: CONTACT_FORM_CONTENT.fields.topics,
              customFormDropdownField: ["Topic 1", "Topic 2", "Topic 3"]
            }
          }
        }
      ]
    },
    defaultSendButtonText: CONTACT_FORM_CONTENT.submit,
    sendingSendButtonText: CONTACT_FORM_CONTENT.submitting,
    successSendButtonText: "Success",
    errorSendButtonText: "Error"
  };

  return (
    <section className="relative bg-transparent -mt-40 -top-40">
      <div className="max-w-[100vw] w-full relative">
        <div className="bg-[url('/Bg/bgWeAre.webp')] bg-no-repeat bg-center bg-[length:120vw_85%] pt-24 pb-64 px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem] relative">
          <div className="container mx-auto my-20 pt-20">
            <div className="w-full md:w-[95%] lg:w-[85%] xl:w-[75%] 2xl:w-[70%]">
              <h2 className="text-[clamp(3rem,7vw,5.5rem)] leading-tight font-PerformanceMark text-white mb-4 whitespace-pre-line">
                {config.formTitle || CONTACT_FORM_CONTENT.header.title}
              </h2>
            </div>
            
            <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[55%] 2xl:w-[45%]">
              <p className="text-xl md:text-2xl font-bold font-poppins text-white/90 leading-relaxed whitespace-pre-line mb-20">
                {config.formSubtitle || CONTACT_FORM_CONTENT.header.subtitle}
              </p>
            </div>
          </div>

          <div className="hidden md:block absolute right-0 bottom-[-60%] w-[65%] max-w-[1080px] h-[140%] z-[2] pointer-events-none overflow-hidden">
            <div className="relative w-full h-full -right-40">
              <Image 
                src="/invest-in-talent/JuanH.webp"
                alt="Decorative horse"
                fill
                className="object-contain"
                style={{ transform: 'scale(0.95)' }}
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative -mt-16 pb-16">
          <div className="container mx-auto px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem] relative">
            <div className="relative z-[1]">
              <div className="lg:w-3/4">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <FormField
                    label={config.nameFieldTag}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={errors.name}
                    disabled={isSubmitting}
                  />

                  {config.customContactFormFields.items.map((field, index) => (
                    <FormField
                      key={index}
                      label={field.content.properties.customFormFieldTitle}
                      name={index === 0 ? "specialization" : "topics"}
                      type="select"
                      value={index === 0 ? formData.specialization : formData.topics}
                      onChange={handleChange}
                      required
                      error={index === 0 ? errors.specialization : errors.topics}
                      disabled={isSubmitting}
                      options={field.content.properties.customFormDropdownField}
                    />
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label={config.emailFieldTag}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      error={errors.email}
                      disabled={isSubmitting}
                    />

                    <FormField
                      label={config.phoneFieldTag}
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      error={errors.phone}
                      disabled={isSubmitting}
                    />
                  </div>

                  <FormStatus
                    isSubmitting={isSubmitting}
                    submitError={status?.success === false ? config.errorSendButtonText : null}
                    isSuccess={status?.success}
                    defaultText={config.defaultSendButtonText}
                    submittingText={config.sendingSendButtonText}
                    successText={config.successSendButtonText}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};