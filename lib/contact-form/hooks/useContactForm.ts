import { useState } from 'react';
import { ContactFormService } from '../services/ContactFormService';
import { BaseFormData, FormSubmissionResponse } from '../types';

export function useContactForm<T extends BaseFormData>(
  service: ContactFormService,
  initialState: T
) {
  const [formData, setFormData] = useState<T>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormSubmissionResponse | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const processedValue = type === 'number' ? Number(value) : value;
    setFormData(prev => ({ ...prev, [name]: processedValue }));
  };

  const handleArrayChange = (name: keyof T, values: string[]) => {
    setFormData(prev => ({ ...prev, [name]: values }));
  };

  const handleBooleanChange = (name: keyof T, value: boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const result = await service.submitForm(formData);
    
    setIsSubmitting(false);
    setStatus(result);

    if (result.success) {
      setFormData(initialState);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return {
    formData,
    isSubmitting,
    status,
    handleChange,
    handleArrayChange,
    handleBooleanChange,
    handleSubmit
  };
}