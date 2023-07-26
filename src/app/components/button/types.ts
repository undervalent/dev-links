
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  secondary?: boolean;
  fullWidth?: boolean;
}
