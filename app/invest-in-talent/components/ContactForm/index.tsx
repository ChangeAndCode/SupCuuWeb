'use client';

import { useState, useEffect } from 'react';
import { FormField } from './FormField';
import type { FormData } from './types';
import Image from 'next/image';
import { TornPaper } from '../TornPaper';

export const ContactForm = () => {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    data: {
      name: '',
      specialization: '',
      experience: '',
      interests: ''
    },
    errors: {} as Partial<FormData>,
    isLoading: false,
    isSuccess: false,
    submitError: null as string | null
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { data: formData, errors, isLoading, isSuccess, submitError } = formState;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key as keyof FormData] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setFormState(prev => ({ ...prev, errors: newErrors }));
      return;
    }

    setFormState(prev => ({ 
      ...prev, 
      isLoading: true, 
      submitError: null, 
      isSuccess: false 
    }));
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Submission failed');
      setFormState(prev => ({
        ...prev,
        isSuccess: true,
        data: { name: '', specialization: '', experience: '', interests: '' }
      }));
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        submitError: 'An error occurred while submitting the form. Please try again.'
      }));
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            AND LET'S CONNECT YOU<br />
            WITH A STARTUP THAT MATCHES<br />
            YOUR INTERESTS.
          </p>
        </div>
      </div>

      <TornPaper position="top" color="white" className="z-10" />

      <div className="bg-white">
        <div className="container mx-auto px-[2rem] lg:px-[6rem] xl:px-[4rem] 2xl:px-[8rem]">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3">
              {isSuccess ? (
                <div className="bg-green-100 text-green-800 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-medium mb-2">Thanks for your submission!</h3>
                  <p>We'll review your information and get back to you soon.</p>
                  <button
                    onClick={() => setFormState(prev => ({ ...prev, isSuccess: false }))}
                    className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {Object.entries(formData).map(([name, value]) => (
                    <FormField
                      key={name}
                      label={name.charAt(0).toUpperCase() + name.slice(1)}
                      name={name}
                      type={name === 'experience' || name === 'interests' ? 'textarea' : 'text'}
                      value={value}
                      onChange={handleChange}
                      required
                      error={errors[name as keyof FormData]}
                      disabled={isLoading}
                    />
                  ))}

                  {submitError && (
                    <div className="bg-red-100 text-red-600 p-4 rounded-lg" role="alert">
                      {submitError}
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="bg-ColorPrincipal text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="lg:w-1/3 relative">
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