import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center'>
      <Image src='/startup.webp' alt='Company Logo' width={170} height={70} quality={80} priority/>
    </Link>
  );
};

export default Logo;
