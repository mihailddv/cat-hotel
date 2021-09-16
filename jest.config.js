module.exports = {
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    'UI/(.*)$': '<rootDir>/src/components/ui/$1',
    'Components/(.*)$': '<rootDir>/src/components/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.vue', '!**/node_modules/**'],
};
