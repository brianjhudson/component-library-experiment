// test-utils.js
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react'

import { theme } from './theme';

const AllTheProviders: ({ children }: { children: any }) => any = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
        {children}
    </ThemeProvider>
  )
}

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }