module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react'
      },
      diagnostics: false
    }
  },
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  setupFiles: ['<rootDir>/src/tests/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupAfterEnv.ts'],
  cacheDirectory: '.jest/cache'
}
