import React from 'react'
import {ThemeProvider as StyledComponentThemeProvider} from 'styled-components'
import {palette} from './palette/palette'

interface ThemeProps {
	children: JSX.Element
}

const ThemeProvider = ({children}: ThemeProps) => (
	<StyledComponentThemeProvider
		theme={{colors: palette, font: 'Maison Neue, sans-serif'}}
	>
		{children}
	</StyledComponentThemeProvider>
)

export default ThemeProvider
