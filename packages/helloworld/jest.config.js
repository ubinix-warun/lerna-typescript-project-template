module.exports = {
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest", 
      {
        tsconfig: "tsconfig.json"
      }
    ]
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageReporters: ["lcov", "text", "clover", "html"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
