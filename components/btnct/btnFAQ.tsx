'use client';
import { FaDownload } from 'react-icons/fa';

interface BtnFAQProps {
  pdfUrl: string;
  buttonText?: string;
}

const BtnFAQ: React.FC<BtnFAQProps> = ({ 
  pdfUrl = '/FAQ.pdf', 
  buttonText = 'FAQ' 
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = pdfUrl.split('/').pop() || 'FAQ.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className='flex items-center gap-2 bg-ColorPrincipal text-2xl text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 main-Tipography'
    >
      <FaDownload className='text-xl' />
      <span>{buttonText}</span>
    </button>
  );
};

export default BtnFAQ;
