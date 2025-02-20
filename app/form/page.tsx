'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ContactFormService, useContactForm } from '@/lib/contact-form';
import type { FormConfig } from '@/types/contact-form';
import InputField from './components/InputField';

// Only keep dynamic imports for non-critical components
const ContactUs = dynamic(() => import('./components/ContacUs'), {
  loading: () => <div className="md:w-5/12 h-[200px] animate-pulse bg-gray-200/20 rounded-lg" />
});

const RedesSociales = dynamic(() => import('./components/RedesSociales'), {
  loading: () => <div className="h-[200px] animate-pulse bg-gray-200/20 rounded-lg" />
});

const Notification = dynamic(() => import('./components/Notification'), {
  loading: () => <div className="h-[48px] animate-pulse bg-gray-200/20 rounded-lg" />
});

export default function Form() {
  const [hydrated, setHydrated] = useState(false);
  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const basePath = process.env.NEXT_PUBLIC_CONTACT_FORM_PATH || '/contact-form/1';
        const response = await fetch(`/api/umbraco?path=${basePath}/`, {
          cache: 'no-cache'
        });
        const data = await response.json();
        setFormConfig(data.properties);
      } catch (error) {
        console.error('Failed to fetch form config:', error);
      }
    };

    fetchConfig();
  }, []);

  const initialState = {
    name: '',
    topicsOfInterest: '',
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
    handleSubmit
  } = useContactForm(contactService, initialState);

  const config = formConfig || {
    formTitle: "I'm ready to discover more",
    nameFieldTag: "Name",
    emailFieldTag: "E-mail",
    phoneFieldTag: "Phone",
    defaultSendButtonText: "Send",
    sendingSendButtonText: "Sending...",
    successSendButtonText: "Success",
    errorSendButtonText: "Error",
    customContactFormFields: {
      items: [
        {
          content: {
            properties: {
              customFormFieldTitle: "TOPICS OF INTEREST",
              customFormDropdownField: ["General Updates", "Events", "Opportunities"]
            }
          }
        }
      ]
    }
  };

  const topicsConfig = config.customContactFormFields.items[0]?.content.properties;

  if (!hydrated) {
    return (
      <div className="relative bg-ColorPrincipal rounded-t-7xl px-[2rem] md:px-[3rem] lg:px-0 py-[10rem] z-30">
        <div className="animate-pulse">
          <div className="h-[150px] w-[150px] bg-gray-200/20 rounded-lg absolute top-[-4rem] left-[4rem] md:left-[10rem] xl:left-[15rem] 2xl:left-[23rem]" />
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="h-8 bg-gray-200/20 rounded w-2/3"></div>
            <div className="h-12 bg-gray-200/20 rounded-2xl"></div>
            <div className="h-12 bg-gray-200/20 rounded-2xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-12 bg-gray-200/20 rounded-2xl"></div>
              <div className="h-12 bg-gray-200/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-ColorPrincipal rounded-t-7xl px-[2rem] md:px-[3rem] lg:px-0 py-[10rem] z-30">
      <div className="absolute top-[-4rem] left-[4rem] md:left-[10rem] xl:left-[15rem] 2xl:left-[23rem]">
        <Image
          src="/logoE.webp"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
          quality={80}
        />
      </div>
      
      <div className="px-[.3rem] md:px-[4rem] lg:px-[11rem] xl:px-[19rem] 2xl:px-[30rem] mb-[1rem]">
        <h2 className="font-pragmatica text-white md:text-[1.8rem] xl:text-[2.2rem] uppercase">
          {config.formTitle}
        </h2>
      </div>

      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="space-y-8 w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
          <InputField 
            label={config.nameFieldTag}
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          
          <InputField 
            label={topicsConfig?.customFormFieldTitle || "Topics of Interest"}
            id="topicsOfInterest" 
            type="select"
            value={formData.topicsOfInterest} 
            onChange={handleChange}
            options={topicsConfig?.customFormDropdownField}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] md:gap-[3rem]">
            <InputField 
              label={config.emailFieldTag}
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <InputField 
              label={config.phoneFieldTag}
              id="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>

          {status && (
            <Notification
              type={status.success ? 'success' : 'error'}
              message={status.message}
            />
          )}

          <button 
            type="submit"
            disabled={isSubmitting}
            className="relative z-50 w-full bg-white hover:bg-gray-100 text-ColorPrincipal font-pragmatica uppercase rounded-2xl py-4 disabled:opacity-50"
          >
            {isSubmitting ? config.sendingSendButtonText : config.defaultSendButtonText}
          </button>

          <div className="flex flex-col lg:flex-row justify-between">
            <ContactUs />
            <RedesSociales />
          </div>
        </form>
      </div>
    </div>
  );
}