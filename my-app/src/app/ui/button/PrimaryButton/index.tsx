import { Button } from '@radix-ui/themes';
import { ReactNode } from 'react';

type PrimaryProps = {
  children: ReactNode;
};

export const PrimaryButton = ({ children }: PrimaryProps) => {
  return (
    <Button variant="solid" size="3">
      {children}
    </Button>
  );
};
