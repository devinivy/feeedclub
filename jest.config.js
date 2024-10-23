// Ensure that a babel.config.js is in the package root to properly transiple ES modules
const esModules = ['get-port', 'node-fetch'].join('|')

// jestconfig.base.js
module.exports = {
  displayName: 'feeedclub',
  roots: ['<rootDir>/src', '<rootDir>/tests', '<rootDir>/dev-env'],
  transform: {
    '^.+\\.(t|j)s?$': '@swc/jest',
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/.pnpm/(?!${esModules})`],
  testRegex: '(/tests/.*.(test|spec)).(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  testTimeout: 60000,
}
