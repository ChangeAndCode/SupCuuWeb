// app/form/types/email.ts

export interface FormData {
    name: string;
    topicsOfInterest: string;
    email: string;
    phone: string;
  }
  
  export interface EmailRequest {
    to: string;
    subject: string;
    body: string;
  }
  
  export interface ApiResponse {
    success: boolean;
    message: string;
  }