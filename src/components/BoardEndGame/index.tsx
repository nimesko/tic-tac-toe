import React from 'react'
import styled from 'styled-components'

import Button from '@components/Button'
import { Player } from '@models'

const TieGame = styled.div`
    font-weight: bold;
    margin: 0 0 1rem;
    font-size: 2rem;
    letter-spacing: 0.02857em;
`

const Winner = styled.div`
    text-align: center;
    font-size: 2.5rem;
    margin: 0 0 1rem;
`

const EndGame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.color.backgroundEndGame};
    color: ${props => props.theme.color.colorText};
    transition: all .3s;
    width: 100%;
    height: 100%;
`

export interface BoardEndGameProps {
    player?: Player
    onResetGame: () => void
}

const BoardEndGame = ({ player, onResetGame }: BoardEndGameProps) => {
    
	const handleResetGame = () => {
		onResetGame()
	}

	return (
		<EndGame>
			{player ? (
				<Winner>{player.name} won!</Winner>
			) : (
				<TieGame>Tied Game</TieGame>
			)}
			<Button aria-label="Start New Game" onClick={handleResetGame}>Start New Game</Button>
		</EndGame>
	)
}

export default BoardEndGame