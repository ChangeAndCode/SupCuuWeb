// app/form/lib/emailApi.ts
import type { FormData, EmailRequest, ApiResponse } from '../types/email';

const getApiUrl = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
        console.warn('NEXT_PUBLIC_API_URL not found in environment variables');
        return 'http://localhost:5000';
    }
    return apiUrl;
};

export const sendEmail = async (formData: FormData): Promise<ApiResponse> => {
    const API_URL = getApiUrl();

    const emailRequest: EmailRequest = {
        templateName: 'contact-form',
        to: formData.email || 'default@example.com',
        templateData: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            topicsOfInterest: formData.topicsOfInterest
        }
    };

    try {
        const response = await fetch(`${API_URL}/api/Email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailRequest)
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
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