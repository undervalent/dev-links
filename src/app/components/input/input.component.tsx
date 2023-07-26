import React from "react";
import * as Styled from "./styles";
import { AiTwotoneMail } from 'react-icons/ai';
import { PiLockKeyFill } from 'react-icons/pi';

interface IProps {
  name: string;
  placeholder: string;
  type: 'password'|'email';
  required?: boolean;
  label: string;
  error?: string;
}


function getIcon(type: string) {
  switch (type) {
    case 'password':
return <PiLockKeyFill color="#737373" />
    case 'email':
return <AiTwotoneMail color="#737373" />
    default:
      return null;
  }

}

export const Input = ({ name, error, placeholder, label, ...rest }: IProps) => {

  const icon = getIcon(rest.type);

  return (
    <Styled.FormField name={name}>
      <Styled.IconWrapper>
      {icon}</Styled.IconWrapper>
      <Styled.Label error={!!error}>{label}</Styled.Label>
      <Styled.Input name={name} placeholder={placeholder} {...rest} />
      {!!error && <Styled.FormMessage>{error}</Styled.FormMessage>}
    </Styled.FormField>
  );
};

export default Input;
