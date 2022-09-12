import React from 'react'
import styled from 'styled-components'
import CircleIcon from '@components/CircleIcon'
import CrossIcon from '@components/CrossIcon'

export interface FieldProps {
    position: number
    size: number
    player?: number
    onClick : ({ position }: { position: number }) => void
}

const FieldComponent = styled.div.withConfig({
	shouldForwardProp: props => !['size'].includes(props)
})<{ size: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid ${props => props.theme.color.borderColorGrid};
    border-bottom: 1px solid ${props => props.theme.color.borderColorGrid};
    font-family: sans-serif;
    color: ${props => props.theme.color.colorIconGrid};
    &:nth-child(${({ size }) => size}n) {
        border-right: none;
    }
    &:nth-last-child(-n + ${({ size }) => size}) {
        border-bottom: none;
    }
    > * {
        width: 75%;
    }
`

const Field = ({ player, position, size, onClick }: FieldProps) => {    
	const handleOnClick = () => {
		onClick({ position })
	}
    
	return (
		<FieldComponent onClick={handleOnClick} size={size}>
			{player === 0 ? <CrossIcon /> : player === 1 ? <CircleIcon /> : ''}
		</FieldComponent>
	)
}

export default Field