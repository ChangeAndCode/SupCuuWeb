'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import InputField from './components/InputField';
import { sendEmail } from './lib/emailApi';
import type { FormData } from './types/email';
import React from 'react';

// Dynamic imports with loading states
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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    topicsOfInterest: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendEmail(formData);

    setIsSubmitting(false);
    setSubmitStatus({
      type: result.success ? 'success' : 'error',
      message: result.message
    });

    if (result.success) {
      setFormData({
        name: '',
        topicsOfInterest: '',
        email: '',
        phone: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }
  };

  const formId = React.useId();

  if (!isLoaded) {
    return <div className="relative bg-ColorPrincipal rounded-t-7xl px-[2rem] md:px-[3rem] lg:px-0 py-[10rem] z-30" />;
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
          I&apos;m ready to discover more
        </h2>
      </div>

      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="space-y-8 w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
          <InputField 
            key="name-field"
            label="Name" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          
          <InputField 
            label="Topics of Interest" 
            id="topicsOfInterest" 
            value={formData.topicsOfInterest} 
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] md:gap-[3rem]">
            <InputField 
              label="E-mail" 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <InputField 
              label="Phone" 
              id="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>

          {submitStatus && (
            <Notification
              type={submitStatus.type}
              message={submitStatus.message}
            />
          )}

          <button 
            type="submit"
            disabled={isSubmitting}
            className="relative z-50 w-full bg-white hover:bg-gray-100 text-ColorPrincipal font-pragmatica uppercase rounded-2xl py-4 disabled:opacity-50"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
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