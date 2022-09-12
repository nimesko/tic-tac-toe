import { render } from '@testing-library/react'
import React from 'react'
import Loading from '.'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../../theme'

describe('Loading', () => {
	test('should render', () => {
		const { container } = render(
			<ThemeProvider theme={DarkTheme}>
				<Loading />
			</ThemeProvider>
		)

		expect(container.firstChild).toBeTruthy()
	})
})