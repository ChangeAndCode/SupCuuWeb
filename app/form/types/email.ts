export interface FormData {
    name: string;
    topicsOfInterest: string;
    email: string;
    phone: string;
}

export interface EmailRequest {
    templateName: string;
    to: string;
    templateData: Record<string, any>;
}

export interface ApiResponse {
    success: boolean;
    message: string;
}