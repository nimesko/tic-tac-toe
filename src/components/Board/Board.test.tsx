import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../../theme'
import Board, { BoardProps } from '.'
import { faker } from '@faker-js/faker'

enum GameState {
	TIED,
	WINNER,
	ONGOING,
	INIT
}

const renderComponent = (props: BoardProps) => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<Board {...props} />
		</ThemeProvider>
	)
}

const generateProps = ({ disableKeyboard, state }: { disableKeyboard: boolean, state: GameState }): BoardProps => {
	let grid
	if (state === GameState.ONGOING) {
		grid = [0, -1, 0, -1, 1, -1, 1, 0, -1]
	} else if (state === GameState.TIED) {
		grid = [0, 1, 0, 0, 1, 1, 1, 0, 0]
	} else if (state === GameState.WINNER) {
		grid = [0, -1, -1, 0, 1, -1, 0, 1, -1]
	} else {
		grid = new Array(9).fill(0).map(() => -1)
	}
	return {
		grid,
		players: new Array(2).fill(0).map((_, index) => ({
			id: `${index + 1}`,
			name: faker.name.fullName(),
			score: 1
		})),
		disableKeyboard,
		onGameUpdate: jest.fn(),
		onGameReset: jest.fn(),
		onGameFinished: jest.fn(),
	}
}

describe('Board', () => {
	test('should render initial state', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.INIT })
		
		render(renderComponent(props))

		expect(document.querySelectorAll('svg')).toHaveLength(0)
	})

	test('should render tied game', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.TIED })
		
		render(renderComponent(props))

		expect(document.querySelectorAll('svg').length).toBeGreaterThan(0)
	})

	test('should render on going game', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.ONGOING })
		
		render(renderComponent(props))

		expect(document.querySelectorAll('svg').length).toBeGreaterThan(0)
	})

	test('should call onGameUpdate by clicking', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.INIT })
		
		const { container } = render(renderComponent(props))

		const field = (container.firstChild?.firstChild?.firstChild) as HTMLElement

		fireEvent.click(field)

		expect(props.onGameUpdate).toHaveBeenCalledTimes(1)
	})

	test('should call onGameUpdate when using keyboard with valid value', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.INIT })
		
		render(renderComponent(props))

		fireEvent.keyPress(document.body, { key: '1' })
		
		expect(props.onGameUpdate).toHaveBeenCalledTimes(1)
	})

	test('should not call onGameUpdate when using keyboard with invalid value', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.INIT })
		
		render(renderComponent(props))

		fireEvent.keyPress(document.body, { key: 'a' })
		
		expect(props.onGameUpdate).not.toHaveBeenCalled()
	})

	test('should call onGameReset when using enter keyboard on tied game', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.TIED })

		render(renderComponent(props))

		fireEvent.keyPress(document.body, { key: 'Enter' })

		expect(props.onGameReset).toHaveBeenCalledTimes(1)
	})

	test('should call onGameReset when using enter keyboard when we have a winner', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.WINNER })
		
		render(renderComponent(props))

		fireEvent.keyPress(document.body, { key: 'Enter' })

		expect(props.onGameReset).toHaveBeenCalledTimes(1)
	})

	test('should call onGameReset when clicking a button with a tied game', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.TIED })
		
		render(renderComponent(props))

		fireEvent.click(document.querySelector('button') as HTMLElement)
		
		expect(props.onGameReset).toHaveBeenCalledTimes(1)
	})

	test('should call onGameReset when clicking a button with a winner player', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.WINNER })
		
		render(renderComponent(props))

		fireEvent.click(document.querySelector('button') as HTMLElement)

		expect(props.onGameReset).toHaveBeenCalledTimes(1)
	})

	test('should call onGameFinished with tied game', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.TIED })

		render(renderComponent(props))

		expect(props.onGameFinished).toHaveBeenCalledTimes(1)
	})


	test('should call onGameFinished with a winner player', () => {
		const props = generateProps({ disableKeyboard: false, state: GameState.WINNER })
		
		render(renderComponent(props))

		expect(props.onGameFinished).toHaveBeenCalledTimes(1)
	})

	test('should not call onGameUpdate when we disable keyboard', () => {
		const props = generateProps({ disableKeyboard: true, state: GameState.INIT })
		
		render(renderComponent(props))

		fireEvent.keyPress(document.body, { key: '1' })

		expect(props.onGameUpdate).not.toHaveBeenCalled()
	})
})
