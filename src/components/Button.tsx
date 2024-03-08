import React from 'react';
import type { FC } from 'react';

import { cnButton } from './Button.classname';

import './Button.css';

type ButtonsProps = {
  theme: 'light' | 'dark';
  role: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
};

const Button: FC<ButtonsProps> = ({ theme, role, disabled, className }) => {
  return (
    <button className={cnButton({ theme, role, disabled }, [className])} disabled={disabled}>Hello</button>
  );
}

export { Button };
