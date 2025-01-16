// app/form/lib/emailApi.ts
import type { FormData, EmailRequest, ApiResponse } from '../types/email';

const getApiUrl = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log('API URL from env:', apiUrl); // Debug log
  
  if (!apiUrl) {
    console.warn('NEXT_PUBLIC_API_URL not found in environment variables');
    return 'http://localhost:5000'; // Fallback URL
  }
  
  return apiUrl;
};

export const sendEmail = async (formData: FormData): Promise<ApiResponse> => {
  const API_URL = getApiUrl();
  console.log('Using API URL:', API_URL); // Debug log

  try {
    const emailRequest: EmailRequest = {
      to: formData.email,
      subject: "New Contact Form Submission",
      body: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Topics of Interest:</strong> ${formData.topicsOfInterest}</p>
      `
    };

    console.log('Sending request to:', `${API_URL}/api/Email`); // Debug log

    const response = await fetch(`${API_URL}/api/Email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailRequest)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Server response:', errorData);
      throw new Error(errorData.message || 'Failed to send email');
    }

    const data = await response.json();
    return {
      success: true,
      message: 'Message sent successfully'
    };
  } catch (error) {
    console.error('Error sending form:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    };
  }
};