import { render } from '@testing-library/react'
import React from 'react'
import SoundOn from '.'

describe('SoundOn', () => {

	test('should render', () => {
		const { container } = render(<SoundOn />)
        
		expect(container.firstChild).toBeTruthy()
	})

})