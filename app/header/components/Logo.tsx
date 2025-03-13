// components/Logo.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl } from '@/utils/umbracoImageHelper';

interface LogoProps {
  logoUrl?: string | null;
}

const Logo: React.FC<LogoProps> = ({ logoUrl }) => {
  const fallbackLogo = '/startup.webp'; // Your fallback logo path
  const finalLogoUrl = logoUrl ? getImageUrl(logoUrl, fallbackLogo) : fallbackLogo;
 
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={finalLogoUrl}
        alt="Company Logo"
        width={170}
        height={70}
        quality={80}
        priority
      />
    </Link>
  );
};

export default Logo;
