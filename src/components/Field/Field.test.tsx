import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Field, { FieldProps } from '.'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../../theme'

const renderComponent = (props: FieldProps) => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<Field {...props} />
		</ThemeProvider>
	)
}

const generateProps = ({ player }: { player?: number}): FieldProps => {
	return {
		player: player,
		position: 1,
		size: 3,
		onClick: jest.fn()
	}
}

describe('Field', () => {
	test('should render', () => {
		const props = generateProps({ player: 1 })

		const { container } = render(renderComponent(props))
        
		expect(container.firstChild).toBeTruthy()
	})

	test('should render player 1 or player 2', () => {
		[
			generateProps({ player: 0 }),
			generateProps({ player: 1 })
		].forEach(props => {
			const { container } = render(renderComponent(props))
			expect(container.querySelector('svg')).toBeTruthy()
		})
	})

	test('should not render svg icon', () => {
		const props = generateProps({ player: undefined })

		const { container } = render(renderComponent(props))
        
		expect(container.firstChild).toBeTruthy()
		expect(container.querySelector('svg')).not.toBeTruthy()
	})

	test('should call onClick', () => {
		const props = generateProps({ player: 1 })

		const { container } = render(renderComponent(props))

		fireEvent.click(container.querySelector('svg') as SVGSVGElement)

		expect(props.onClick).toHaveBeenCalledTimes(1)
	})

})
