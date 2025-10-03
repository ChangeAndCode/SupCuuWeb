import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

const CallToAction: React.FC<CallToActionProps> = ({ cta }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 my-8">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-3">{cta.title}</h3>
        <p className="mb-6 text-blue-100">{cta.description}</p>
        
        <Link href={cta.buttonUrl}>
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 group"
          >
            {cta.buttonText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;