import Button from '@components/Button'
import SoundOn from '@components/SoundOn'
import SoundOff from '@components/SoundOff'
import React from 'react'
import styled from 'styled-components'

export interface ToggleSoundProps {
    isSoundEnabled: boolean
    onChange: (isEnabled: boolean) => void
}

const StyledButton = styled(Button)`
    width: 4rem;
`


const ToggleSound = ({ isSoundEnabled, onChange }: ToggleSoundProps) => {
	
	const handleOnClick = () => {
		onChange(!isSoundEnabled)
	}

	return (
		<StyledButton aria-label={`Toggle sound to ${isSoundEnabled ? 'off' : 'on'}`} onClick={handleOnClick}>
			{isSoundEnabled ? <SoundOn /> : <SoundOff />}
		</StyledButton>
	)
}

export default ToggleSound