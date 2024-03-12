import React from 'react';
import type { FC, ReactNode } from 'react';

import './GroupButtons.css';

import { cnGroupButtons } from './GroupButtons.classname';

type GroupButtonsProps = {
  children: ReactNode;
  theme: 'dark' | 'light';
}

const GroupButtons: FC<GroupButtonsProps> = ({ children, theme }) => (
  <div className={cnGroupButtons({ theme })}>{children}</div>
)

export { GroupButtons };
