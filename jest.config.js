module.exports = {
  moduleNameMapper: {
    '@ng-npm7-example/table': '<rootDir>/libs/table/src/public_api.ts',
    '@ng-npm7-example/auth': '<rootDir>/libs/auth/src/public_api.ts'
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
