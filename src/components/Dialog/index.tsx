import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

export interface DialogProps {
    children: ReactNode
    isVisible: boolean
    onClose: () => void
}

const Wrapper = styled.dialog`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.backgroundDialog};
    max-width: 760px;
`

const Dialog = ({ onClose, children, isVisible }: DialogProps) => {
	useEffect(() => {
		const onKeyUp = (event: KeyboardEvent) => {
			const value = event.key.trim()
			if (/escape/i.test(value)) {
				onClose()
			}
		}
		document.addEventListener('keyup', onKeyUp)
		return () => document.removeEventListener('keyup', onKeyUp)
	}, [])

	if (!isVisible) {
		return null
	}

	const handleOnClose = () => {
		onClose()
	}

	const modalRoot = document.getElementById('modal-root') as HTMLDivElement

	return (
		createPortal(
			<Wrapper open={isVisible} onClick={handleOnClose} >
				{children}
			</Wrapper>,
			modalRoot
		)
	)
}

Dialog.defaultProps = {
	isVisible: false
}

export default Dialog
