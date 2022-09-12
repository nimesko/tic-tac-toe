import React, { useEffect } from 'react'
import Field from '@components/Field'
import BoardGrid from '@components/BoardGrid'
import BoardEndGame from '@components/BoardEndGame'
import { getGameStatistics } from '@services/game'
import styled from 'styled-components'
import { GameStatistics, Player } from '@models'
import { processKeyNumber } from '@services/event'

export interface BoardProps {
    grid: number[]
    players: Player[]
	disableKeyboard: boolean
	onGameUpdate: ({ position }: { position: number }) => void
	onGameReset: () => void
    onGameFinished: ({ grid, winner }: GameStatistics) => void
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
    ${BoardGrid} {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`

const WrapperBoardEndGame = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`

const Board = ({ disableKeyboard, grid, players, onGameUpdate, onGameFinished, onGameReset } : BoardProps) => { 
	const { winner, playsLeft } = getGameStatistics(grid)
	const isGameFinished = playsLeft === 0 || winner !== -1
	const size = Math.sqrt(grid.length)

	const handleClick = ({ position }: { position: number }) => {
		onGameUpdate({ position })
	}

	const handleResetGame = () => {
		onGameReset()
	}

	useEffect(() => {
		const onKeyPress = (event: KeyboardEvent) => {
			if (!disableKeyboard) {
				const value = event.key.trim()
				const number = +value
				if (isGameFinished) {
					if (/enter/i.test(event.key)) {
						onGameReset()
					}
				} else {
					if (number && !isNaN(number)) {
						onGameUpdate({ position: processKeyNumber(number) })
					}
				}
				event.preventDefault()
				return false
			}
		}
		document.addEventListener('keypress', onKeyPress)

		if (isGameFinished) {
			onGameFinished({ grid, winner: players[winner] })
		}

		return () => document.removeEventListener('keypress', onKeyPress)
	}, [disableKeyboard, isGameFinished])

	return (
		<Wrapper>
			<BoardGrid size={size} disabled={isGameFinished}>
				{grid.map((player, index) => (
					<Field
						onClick={handleClick}
						position={index}
						size={size}
						key={index}
						player={player} />
				))}
			</BoardGrid>
			{
				isGameFinished && (
					<WrapperBoardEndGame>
						<BoardEndGame player={players[winner]} onResetGame={handleResetGame} />
					</WrapperBoardEndGame>
				)
			}
		</Wrapper>
	)
}

export default Board