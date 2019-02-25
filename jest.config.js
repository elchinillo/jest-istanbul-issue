module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js,jsx}'],
    coverageReporters: ['text'],
    coverageThreshold: {
        global: {
            statements: 85,
            branches: 77,
            functions: 90,
            lines: 85
        }
    },
    rootDir: 'src'
};

