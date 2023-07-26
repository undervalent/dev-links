import './globals.css'
import type { Metadata } from 'next'
import StyledComponentsRegistry from '../../lib/styles/registry';

export const metadata: Metadata = {
  title: 'DevLinks - Login',
  description: 'Login to DevLinks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}
