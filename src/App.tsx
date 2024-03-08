import React from 'react';
import { cn } from '@bem-react/classname';

import { Button } from './components/Button';

import './App.css';
import './components/Button.css';

export const cnGeneral = cn('General');
export const cnGroupButtons = cn('GroupButtons');
export const cnDarkThemeButtons = cn('DarkThemeButtons');

export const App = () => {
  return (
    <div className="App">
      <div className={cnGeneral()}>
        <div className={cnGroupButtons()}>
          <Button theme='light' role='primary' />
          <Button theme='light' role='primary' disabled />
          <Button theme='light' role='secondary' />
          <Button theme='light' role='secondary' disabled />
        </div>
        <div className={cnGroupButtons({ theme: 'dark' })}>
          <Button theme='dark' role='primary' />
          <Button theme='dark' role='primary' disabled />
          <Button theme='dark' role='secondary' />
          <Button theme='dark' role='secondary' disabled />
        </div>
      </div>
    </div>
  );
}
