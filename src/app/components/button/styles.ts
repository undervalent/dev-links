import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({theme})=> theme.spacing.size2};
  padding: ${({ theme }) => `${theme.spacing.size3} ${theme.spacing.size7}`};
  background: ${({ theme, secondary }) => secondary ? theme.colors.white : theme.colors.primaryDark};
  border-radius: ${({ theme }) => theme.radius.large};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  color: ${({ theme, secondary }) => secondary ? theme.colors.primaryDark : theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.size2};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'all'};
  cursor: pointer;
  opacity: ${({ theme, disabled }) => disabled ? theme.opacity.opacity25 : theme.opacity.opacity100};
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  font-weight: ${({ theme }) => theme.fontWeight.demi};

  &:hover,
  &:focus,
  &:active {
   background: ${({ theme, secondary }) => secondary ? theme.colors.white2 : theme.colors.primaryLight};
  }

`;
