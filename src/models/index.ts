export interface Player {
    id: string
    name: string
    score: number
}

export interface PlayerRank extends Player {
    rank: number
}

export interface FormPlayer {
    firstPlayer: string
    secondPlayer: string
}

export interface GameStatistics {
    grid: number[]
    winner?: Player
}

export type ColorPalete = {
    background: string
    backgroundButton: string
    backgroundButtonHover: string
    backgroundEndGame: string
    backgroundLoading: string
    backgroundLoadingProgress: string
    backgroundDialog: string
    
    borderColorGrid: string
    borderColorTable: string
    borderColorButton: string
    borderColorInput: string
    borderColorInputFocus: string
    
    colorIconGrid: string
    colorText: string
    colorTextHover: string
    colorButtonText: string
    colorButtonTextHover: string
}

export type Theme = {
    name: string
    color: ColorPalete
}
