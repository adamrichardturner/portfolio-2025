import SpinnerDark from '@/public/SpinnerDark.svg';
import SpinnerLight from '@/public/SpinnerLight.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageLoader = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Image src={SpinnerLight} alt="Loading..." width={40} height={40} />;
  }

  return (
    <Image
      src={theme === 'dark' ? SpinnerDark : SpinnerLight}
      alt="Loading..."
      width={40}
      height={40}
    />
  );
};

export default ImageLoader;
