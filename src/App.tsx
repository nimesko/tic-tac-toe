import Loading from '@components/Loading'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/home'))

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="*"
					element={
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
