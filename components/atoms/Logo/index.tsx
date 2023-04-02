import { useRouter } from 'next/router';
import { FC } from 'react';
import { LogoContainer } from './styles';

const Logo: FC = () => {
  const router = useRouter();

  return <LogoContainer onClick={() => router.push('/')}>Neko Space</LogoContainer>;
};

export default Logo;