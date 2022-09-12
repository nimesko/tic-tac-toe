import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../../theme'
import BoardEndGame, { BoardEndGameProps } from '.'
import { faker } from '@faker-js/faker'

const renderComponent = (props: BoardEndGameProps) => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<BoardEndGame {...props} />
		</ThemeProvider>
	)
}

const generateProps = ({ hasPlayer }: { hasPlayer: boolean }): BoardEndGameProps => {
	return {
		player: hasPlayer ? {
			id: '1',
			name: faker.name.fullName(),
			score: 1
		} : undefined,
		onResetGame: jest.fn()
	}
}

describe('BoardEndGame', () => {

	test('should render as tied game', () => {
		const props = generateProps({ hasPlayer: false })

		render(renderComponent(props))

		expect(props.onResetGame).not.toHaveBeenCalled()
	})

	test('should render when we have a winner', () => {
		const props = generateProps({ hasPlayer: true })

		render(renderComponent(props))

		expect(screen.getByText(new RegExp(props.player?.name || ''))).toBeTruthy()
	})

	test('should call onResetGame with tied game', () => {
		const props = generateProps({ hasPlayer: false })

		render(renderComponent(props))

		fireEvent.click(screen.getByText(/start new game/i))

		expect(props.onResetGame).toHaveBeenCalledTimes(1)
	})

	test('should call onResetGame with winner', () => {
		const props = generateProps({ hasPlayer: true })

		render(renderComponent(props))

		fireEvent.click(screen.getByText(/start new game/i))

		expect(props.onResetGame).toHaveBeenCalledTimes(1)
	})

})
