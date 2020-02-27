module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/test/'],
    preset: 'ts-jest',

    verbose: true,
    transform: {
        '^.+\\.(js|ts)x?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    setupFilesAfterEnv: ['jest-extended'],
};
