const { compilerOptions: { paths } } = require('./tsconfig')

const SRC_PATH = '<rootDir>/src'

function makeModuleNameMapper(srcPath) {
	const aliases = {}

	Object.keys(paths).forEach((item) => {
		const key = item.replace('/*', '/(.*)')
		const path = paths[item][0].replace('/*', '/$1')
		aliases[key] = srcPath + '/' + path
	})

	return aliases
}

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	coverageReporters: ['json', 'html'],
	coverageDirectory: './coverage',
	collectCoverage: true,
	clearMocks: true,
	roots: [
		SRC_PATH
	],
	moduleNameMapper: makeModuleNameMapper(SRC_PATH)
}