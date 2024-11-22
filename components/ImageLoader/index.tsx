import SpinnerDark from '@/public/SpinnerDark.svg';
import SpinnerLight from '@/public/SpinnerLight.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ImageLoader = () => {
  const { theme } = useTheme();
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
