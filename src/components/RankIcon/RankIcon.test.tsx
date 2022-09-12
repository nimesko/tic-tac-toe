import { render } from '@testing-library/react'
import React from 'react'
import RankIcon from '.'

describe('RankIcon', () => {

	test('should render', () => {
		const { container } = render(<RankIcon />)
        
		expect(container.firstChild).toBeTruthy()
	})

})
