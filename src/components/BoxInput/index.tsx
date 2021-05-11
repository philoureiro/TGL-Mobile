import React, { useState, useRef } from 'react';
import { Container, Label, } from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword } from '../../store/actions';

interface BoxInputProps {
  textLabel: string;
  children: React.ReactNode;
}

const BoxInput: React.FC<BoxInputProps> = ({ textLabel, children }) => {
  return (
    <Container>
      <Label>{textLabel}</Label>
      {children}
    </Container>
  )
};

export default BoxInput;
