import { render } from '@testing-library/react'
import React from 'react'
import CrossIcon from '.'

describe('CrossIcon', () => {

	test('should render', () => {
		const { container } = render(<CrossIcon />)
        
		expect(container.firstChild).toBeTruthy()
	})

})
