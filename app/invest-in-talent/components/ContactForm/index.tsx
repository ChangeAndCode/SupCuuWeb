'use client';

import { useState, useEffect, type ChangeEvent } from 'react';
import { FormField } from './FormField';
import type { FormData } from './types';
import Image from 'next/image';
import { CONTACT_FORM_CONTENT } from './constants';

export const ContactForm = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [formState, setFormState] = useState<{
    data: FormData;
    errors: Partial<FormData>;
    isLoading: boolean;
    isSuccess: boolean;
    submitError: string | null;
  }>(() => ({
    data: {
      name: '',
      specialization: '',
      topics: '',
      email: '',
      phone: ''
    },
    errors: {},
    isLoading: false,
    isSuccess: false,
    submitError: null
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const { data: formData, errors, isLoading, isSuccess, submitError } = formState;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [name]: value },
      errors: { ...prev.errors, [name]: undefined }
    }));
  };

  return (
    <section className="relative bg-transparent -mt-20 -top-40">
      {/* Wrapper to constrain width and hide overflow */}
      <div className="max-w-[100vw] w-full relative">
        <div className="bg-[url('/Bg/bgWeAre.webp')] bg-no-repeat bg-center bg-[length:120vw_100%] pt-24 pb-64 px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem] relative">
          <div className="container mx-auto my-20">
            <h2 className="text-[clamp(2rem,5vw,4rem)] leading-tight font-PerformanceMark text-white mb-6 whitespace-pre-line">
              {CONTACT_FORM_CONTENT.header.title}
            </h2>
            <p className="text-xl font-bold font-poppins text-white leading-relaxed whitespace-pre-line mb-20">
              {CONTACT_FORM_CONTENT.header.subtitle}
            </p>
          </div>
          
          {/* Horse image with fixed width container */}
          <div className="hidden lg:block absolute right-0 bottom-[-50%] w-[65%] max-w-[1080px] h-[140%] z-20 overflow-hidden">
            <div className="relative w-full h-full -right-20">
              <Image 
                src="/invest-in-talent/JuanH.webp"
                alt="Decorative horse"
                fill
                className="object-contain"
                style={{ transform: 'scale(1.1)' }}
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative -mt-16 pb-16">
          <div className="container mx-auto px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem] relative">
            <div className="relative z-0">
              <div className="lg:w-2/3">
                <form className="space-y-8">
                  <FormField
                    label={CONTACT_FORM_CONTENT.fields.name}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={errors.name}
                    disabled={isLoading}
                  />

                  <FormField
                    label={CONTACT_FORM_CONTENT.fields.specialization}
                    name="specialization"
                    type="select"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                    error={errors.specialization}
                    disabled={isLoading}
                  />

                  <FormField
                    label={CONTACT_FORM_CONTENT.fields.topics}
                    name="topics"
                    type="select"
                    value={formData.topics}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label={CONTACT_FORM_CONTENT.fields.email}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      error={errors.email}
                      disabled={isLoading}
                    />

                    <FormField
                      label={CONTACT_FORM_CONTENT.fields.phone}
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      error={errors.phone}
                      disabled={isLoading}
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-100 text-red-600 p-4 rounded-2xl font-pragmatica" role="alert">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-ColorPrincipal text-white font-pragmatica uppercase rounded-2xl py-4 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? CONTACT_FORM_CONTENT.submitting : CONTACT_FORM_CONTENT.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};