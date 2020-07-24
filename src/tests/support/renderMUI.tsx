import * as React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import { render, RenderResult } from '@testing-library/react'
import theme from '../../styles/theme'

export const renderMUI: (Component: JSX.Element) => RenderResult = (
  Component
) => {
  return render(
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>{Component}</StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  )
}
