import React from "react";
import * as Styled from "./styles";

interface IProps {
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
  label: string;
  error?: string;
}

export const Input = ({ name, error, placeholder,label, ...rest }: IProps) => {
  return (
    <Styled.FormField name={name}>
      <Styled.Label error={!!error}>{label}</Styled.Label>
      <Styled.Input name={name} placeholder={placeholder} {...rest} />
      {!!error && <Styled.FormMessage>{error}</Styled.FormMessage>}
    </Styled.FormField>
  );
};

export default Input;
