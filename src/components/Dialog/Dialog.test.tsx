import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../../theme'
import Dialog, { DialogProps } from '.'

const renderComponent = (props: DialogProps) => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<Dialog {...props} />
		</ThemeProvider>
	)
}

const generateProps = ({ isVisible }: { isVisible: boolean }): DialogProps => {
	return {
		children: <div>Testing</div>,
		isVisible,
		onClose: jest.fn()
	}
}

describe('Dialog', () => {

	beforeAll(() => {
		const divElement = document.createElement('div')
		divElement.id = 'modal-root'
		document.body.appendChild(divElement)
	})

	afterAll(() => {
		document.getElementById('modal-root')?.remove()
	})

	test('should render', () => {
		const props = generateProps({ isVisible: true })
		
		render(renderComponent(props))

		expect(document.getElementById('modal-root')?.children.length).toBeGreaterThan(0)
	})

	test('should render nothing', () => {
		const props = generateProps({ isVisible: false })
		
		render(renderComponent(props))

		expect(document.getElementById('modal-root')?.children.length).toBe(0)
	})

	test('should call onClose when clicking away', () => {
		const props = generateProps({ isVisible: true })
		
		render(renderComponent(props))

		fireEvent.click(document.querySelector('dialog') as HTMLDialogElement)

		expect(props.onClose).toHaveBeenCalledTimes(1)
	})

	test('should not call onClose when hitting other keys expect Esc', () => {
		const props = generateProps({ isVisible: true })
		
		render(renderComponent(props))

		const keys = ['1', 'a', 'Shift', 'Space']
		
		keys.forEach((key: string) => {
			fireEvent.keyUp(document.body, { key })				
		})

		expect(props.onClose).not.toHaveBeenCalled()
	})

	test('should call onClose when hitting Esc key', () => {
		const props = generateProps({ isVisible: true })
		
		render(renderComponent(props))

		fireEvent.keyUp(document.body, { key: 'Escape' })

		expect(props.onClose).toHaveBeenCalledTimes(1)
	})
})
