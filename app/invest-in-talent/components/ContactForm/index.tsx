// app/invest-in-talent/components/ContactForm/index.tsx
'use client';

import { useState } from 'react';
import { TornPaper } from '../TornPaper';
import type { FormData } from './types';

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  error,
  disabled
}: {
  label: string;
  name: string;
  type?: 'text' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}) => {
  const inputClasses = `w-full px-4 py-2 rounded transition-colors
    ${error ? 'border-2 border-red-500' : 'border border-gray-300'}
    ${disabled ? 'bg-gray-100' : 'bg-white'}
    focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900`;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
          disabled={disabled}
          rows={4}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
          disabled={disabled}
        />
      )}
      {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
    </div>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    specialization: '',
    experience: '',
    interests: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.specialization.trim()) {
      newErrors.specialization = 'Area of specialization is required';
    }
    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience details are required';
    }
    if (!formData.interests.trim()) {
      newErrors.interests = 'Interests are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setSubmitError(null);
    setIsSuccess(false);
    
    try {
      // Here you would typically call your API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setIsSuccess(true);
      setFormData({
        name: '',
        specialization: '',
        experience: '',
        interests: ''
      });
    } catch (error) {
      setSubmitError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section className="relative bg-blue-600 text-white py-16">
      <TornPaper position="top" color="white" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-16">
            <h2 className="text-3xl font-bold mb-4 handwritten">
              READY TO BE PART OF THE NEXT SUCCESS STORY?
            </h2>
            <p className="mb-8 text-lg">
              LEAVE YOUR DETAILS,<br />
              AND LET'S CONNECT YOU<br />
              WITH A STARTUP THAT MATCHES<br />
              YOUR INTERESTS.
            </p>
            
            {isSuccess ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-medium mb-2">Thanks for your submission!</h3>
                <p>We'll review your information and get back to you soon.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  error={errors.name}
                  disabled={isLoading}
                />

                <FormField
                  label="Area of Specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  error={errors.specialization}
                  disabled={isLoading}
                />

                <FormField
                  label="Experience Details"
                  name="experience"
                  type="textarea"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  error={errors.experience}
                  disabled={isLoading}
                />

                <FormField
                  label="Interests"
                  name="interests"
                  type="textarea"
                  value={formData.interests}
                  onChange={handleChange}
                  required
                  error={errors.interests}
                  disabled={isLoading}
                />

                {submitError && (
                  <div className="bg-red-100 text-red-600 p-4 rounded" role="alert">
                    {submitError}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="lg:w-1/3 relative mt-8 lg:mt-0">
            <img 
              src="/api/placeholder/300/400" 
              alt="Decorative horse" 
              className="lg:absolute lg:bottom-0 lg:right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};