import { render } from '@testing-library/react'
import React from 'react'
import CircleIcon from '.'

describe('CircleIcon', () => {

	test('should render', () => {
		const { container } = render(<CircleIcon />)
        
		expect(container.firstChild).toBeTruthy()
	})

})
