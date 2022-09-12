import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { faker } from '@faker-js/faker'

import Score, { ScoreProps } from '.'
import { DarkTheme } from '../../theme'
import { ThemeProvider } from 'styled-components'

const generateProps = ({ currentPlayer, playersLength } : { currentPlayer: number, playersLength: number }): Required<ScoreProps> => {
	return {
		currentPlayer,
		players: new Array(playersLength).fill(0).map((_, index) => ({
			id: `${index + 1}`,
			name: faker.internet.userName(),
			score: faker.datatype.number(98)
		})),
		onClickChangeName: jest.fn()
	}
}

const renderComponent = (props: ScoreProps) => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<Score {...props} />
		</ThemeProvider>
	)
}

describe('Score', () => {
	test('should render as player 1', () => {
		const props: Required<ScoreProps> = generateProps({ currentPlayer: 0, playersLength: 2 })

		render(renderComponent(props))

		props.players.forEach(player => {
			expect(screen.getByText(new RegExp(player.name, 'i'))).toBeTruthy()
			expect(screen.getByText(player.score)).toBeTruthy()
		})
	})

	test('should render as player 2', () => {
		const props: Required<ScoreProps> = generateProps({ currentPlayer: 1, playersLength: 2 })

		render(renderComponent(props))

		props.players.forEach(player => {
			expect(screen.getByText(new RegExp(player.name, 'i'))).toBeTruthy()
			expect(screen.getByText(player.score)).toBeTruthy()
		})
	})

	test('should render abbreviation for score', () => {
		const props: Required<ScoreProps> = generateProps({ currentPlayer: 0, playersLength: 2 })

		props.players.forEach(player => {
			player.score += 100
		})

		render(renderComponent(props))

		expect(screen.getAllByText('+99')).toHaveLength(2)
	})

	test('should raise an error when having more or less than 2 players', () => {
		[
			generateProps({ currentPlayer: 1, playersLength: 3 }),
			generateProps({ currentPlayer: 0, playersLength: 1 }),
			generateProps({ currentPlayer: 1, playersLength: 100 }),
		].forEach((props: ScoreProps) => (
			expect(() => render(renderComponent(props))).toThrow()
		))
	})

	test('should call onChangeName', () => {
		const props: Required<ScoreProps> = generateProps({ currentPlayer: 0, playersLength: 2 })

		render(renderComponent(props))

		props.players.forEach(player => {
			fireEvent.click(screen.getByText(new RegExp(player.name, 'i')))
		})

		expect(props.onClickChangeName).toHaveBeenCalledTimes(props.players.length)
	})
})