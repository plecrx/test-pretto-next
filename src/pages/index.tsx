import * as React from 'react'
import Home from './home'
import ThemeProvider from '../theme/themeProvider'

const Index: React.FC = () => {
	return (
		<ThemeProvider>
			<Home />
		</ThemeProvider>
	)
}

export default Index
