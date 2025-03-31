# Lerna TypeScript Project Template

This repository is a template for creating a Lerna monorepo with TypeScript and Jest. It includes a sample "Hello, World!" library and a comprehensive setup for building, testing, and generating documentation.

## Running Tests and Viewing Coverage Reports

To run tests and view coverage reports, follow these steps:

1. **Install Dependencies**: Ensure you have all dependencies installed by running:
   ```sh
   npm install
   ```

2. **Run Tests with Coverage**: Use the following command to run tests and generate coverage reports:
   ```sh
   npm run test:coverage
   ```

3. **View Coverage Reports**: After running the tests, you can view the coverage reports in the `coverage` directory. Open the `index.html` file in a web browser to see the detailed coverage report.

## CI/CD Integration

This repository is configured to run tests and upload coverage reports as part of the CI/CD pipeline using GitHub Actions. The relevant configuration can be found in the `.github/workflows/ci.yml` file.

## Documentation

To generate and view the project documentation, use the following command:
```sh
npm run generate-docs
```

The generated documentation will be available in the `public` directory.
