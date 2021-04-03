module.exports = {
    roots: [
        "<rootDir>"
    ],
    testMatch: [
        '<rootDir>/**/__tests__/**/test.controllers/**/*.(spec|test).(ts|tsx|js)',
        '<rootDir>/**/__tests__/**/?(*.)(spec|test).(ts|tsx|js)'
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'
    ],
    collectCoverageFrom: [
        'src/**/*.{ts,js,tsx}',
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    }
}
