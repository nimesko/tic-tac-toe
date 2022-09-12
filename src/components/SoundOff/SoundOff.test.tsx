import { render } from '@testing-library/react'
import React from 'react'
import SoundOff from '.'

describe('SoundOff', () => {

	test('should render', () => {
		const { container } = render(<SoundOff />)
        
		expect(container.firstChild).toBeTruthy()
	})

})