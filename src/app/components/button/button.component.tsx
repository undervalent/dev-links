import React from 'react'
import * as Styled from './styles'

interface IProps {
  children: React.ReactNode
  secondary?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button = ({children,...rest}:IProps) => {
  return (
    <Styled.Button {...rest}>{children}</Styled.Button>
  )
}

export default Button
