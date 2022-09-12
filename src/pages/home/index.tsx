import React from 'react'
import styled from 'styled-components'
import Board from '@components/Board'
import Score from '@components/Score'
import { GameStatistics, Player } from '@models'
import { dispatchChangeLeaderBoardVisibility, dispatchChangePlayerFormVisibility, dispatchChangeSound, dispatchResetBoard, dispatchTiedGame, dispatchUpdateBoard, dispatchUpdatePlayer, dispatchWinnerPlayer, useGameReducer } from '@reducers/game'
import RankIcon from '@components/RankIcon'
import Button from '@components/Button'
import Dialog from '@components/Dialog'
import LeaderBoard from '@components/LeaderBoard'
import ToggleSound from '@components/ToggleSound'
import { MediaQueries } from '@theme'
import FormPlayer from '@components/FormPlayer'

const Wrapper = styled.div`
    display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
	height: 100%;
`

const ScoreWrapper = styled.div`
    margin: 0 1rem;
`

const BoardWrapper = styled.div`
    width: 80vmin;
	max-width: 600px;
    margin: 3rem 0 0;
	@media screen and ${MediaQueries.sm} {
		width: 100vmin;
	}
`

const Title = styled.h1`
	font-size: 3rem;
	margin: 0;
`

const ButtonLeaderBoard = styled(Button)`
	width: 4rem;
`

const HorizontalContainer = styled.div`
	display: flex;
	justify-content: center;
    align-items: center;
	margin: 3rem 0 0;
`

const HomePage = () => {
	const [game, dispatcherGame] = useGameReducer()

	const handleOnGameUpdate = ({ position } : { position: number }) => {
		dispatchUpdateBoard(dispatcherGame, { position })
	}

	const handleOnGameFinished = ({ winner }: GameStatistics) => {
		if (winner) {
			dispatchWinnerPlayer(dispatcherGame, { player: winner })
		} else {
			dispatchTiedGame(dispatcherGame)
		}
	}

	const handleOnGameReset = () => {
		dispatchResetBoard(dispatcherGame)
	}

	const handleShowPlayerUpdateForm = (player: Player) => {
		dispatchChangePlayerFormVisibility(dispatcherGame, { playerToUpdate: player })
	}

	const handleHidePlayerUpdateForm = () => {
		dispatchChangePlayerFormVisibility(dispatcherGame, { playerToUpdate: undefined })
	}

	const handleShowLeaderBoard = () => {
		dispatchChangeLeaderBoardVisibility(dispatcherGame, { visible: true })
	}

	const handleHideLeaderBoard = () => {
		dispatchChangeLeaderBoardVisibility(dispatcherGame, { visible: false })
	}

	const handleOnChangeSound = (enable: boolean) => {
		dispatchChangeSound(dispatcherGame, { enable })
	}

	const handleOnChangePlayer = ({ name }: { name: string }) => {
		dispatchUpdatePlayer(dispatcherGame, { player: { ...game.playerToUpdate as Player, name } })
	}

	const isEditMode = !!game.playerToUpdate

	return (
		<Wrapper>
			<Title>Tic Tac Toe</Title>
			<BoardWrapper>
				<Board
					disableKeyboard={isEditMode}
					grid={game.grid}
					players={game.players}
					onGameUpdate={handleOnGameUpdate}
					onGameReset={handleOnGameReset}
					onGameFinished={handleOnGameFinished} />
			</BoardWrapper>
			<HorizontalContainer>
				<ButtonLeaderBoard aria-label="Show LeaderBoard" onClick={handleShowLeaderBoard}>
					<RankIcon />
				</ButtonLeaderBoard>
				<ScoreWrapper>
					<Score
						currentPlayer={game.currentPlayer}
						players={game.players}
						onClickChangeName={handleShowPlayerUpdateForm} />
				</ScoreWrapper>
				<ToggleSound onChange={handleOnChangeSound} isSoundEnabled={game.isSoundEnable} />
			</HorizontalContainer>
			<Dialog onClose={handleHideLeaderBoard} isVisible={game.isLeaderBoardVisible}>
				<LeaderBoard players={game.rank} />
			</Dialog>
			<Dialog onClose={handleHidePlayerUpdateForm} isVisible={isEditMode}>
				<FormPlayer value={game.playerToUpdate as Player} onSubmit={handleOnChangePlayer} />
			</Dialog>
		</Wrapper>
	)
}

export default HomePage
