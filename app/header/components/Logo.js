import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center'>
      <Image src='/startup.png' alt='Company Logo' width={170} height={70} />
    </Link>
  );
};

export default Logo;
