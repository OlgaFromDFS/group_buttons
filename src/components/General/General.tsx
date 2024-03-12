import React from 'react';
import type { FC } from 'react';

import './General.css';

import { cnGeneral } from './General.classname';

import { GroupButtons } from '../GroupButtons/GroupButtons';
import { Button } from '../Button/Button';

const General: FC = () => (
  <div className={cnGeneral()}>
    <GroupButtons theme='light'>
      <Button className={cnGeneral('Button')} theme='light' role='primary' />
      <Button className={cnGeneral('Button')} theme='light' role='primary' disabled />
      <Button className={cnGeneral('Button')} theme='light' role='secondary' />
      <Button className={cnGeneral('Button')} theme='light' role='secondary' disabled />
    </GroupButtons>
    <GroupButtons theme='dark'>
      <Button className={cnGeneral('Button')} theme='dark' role='primary' />
      <Button className={cnGeneral('Button')} theme='dark' role='primary' disabled />
      <Button className={cnGeneral('Button')} theme='dark' role='secondary' />
      <Button className={cnGeneral('Button')} theme='dark' role='secondary' disabled />
    </GroupButtons>
  </div>
)

export { General };
