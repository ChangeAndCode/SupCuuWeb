'use client';

import { useState, useEffect, type ChangeEvent } from 'react';
import { FormField } from './FormField';
import type { FormData } from './types';
import Image from 'next/image';
import { TornPaper } from '../TornPaper';

export const ContactForm = () => {
  // Initialize all state as undefined for proper hydration
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

  // Return null on server-side and first render
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
    <section className="relative bg-white -mt-8">
      <div className="bg-[url('/Bg/bgWeAre.webp')] bg-no-repeat bg-center bg-[length:120vw_100%] pt-16 pb-24 px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem] relative z-20">
        <div className="container mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-tight font-PerformanceMark text-white mb-6">
            READY TO BE PART OF THE<br />NEXT SUCCESS STORY?
          </h2>
          <p className="text-lg font-poppins text-white">
            LEAVE YOUR DETAILS,<br />
            AND LET&apos;S CONNECT YOU<br />
            WITH A STARTUP THAT MATCHES<br />
            YOUR INTERESTS.
          </p>
        </div>
      </div>

      <TornPaper position="top" color="white" className="z-10" />

      <div className="bg-white pb-16">
        <div className="container mx-auto px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem]">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3">
              <form className="space-y-8">
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  error={errors.name}
                  disabled={isLoading}
                />

                <FormField
                  label="Areas of Specialization"
                  name="specialization"
                  type="select"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  error={errors.specialization}
                  disabled={isLoading}
                />

                <FormField
                  label="Topics I want to stay updated on"
                  name="topics"
                  type="select"
                  value={formData.topics}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="E-mail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                    disabled={isLoading}
                  />

                  <FormField
                    label="Phone"
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
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
            
            <div className="hidden lg:block lg:w-1/3 relative">
              <div className="relative w-full h-[400px]">
                <Image 
                  src="/horse.webp"
                  alt="Decorative horse"
                  fill
                  className="object-contain lg:object-right-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};