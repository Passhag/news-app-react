## Test Plan

### E2E testing

1. Consider using one of the frameworks such as Cypress or Playwright.
2. Implement automation tests for all possible user scenarios
3. Integrate the tests into CI pipelines

#### E2E testing scenarios

1. Check that the app loads without errors.
2. Check that the user is able to see the list of news articles on the homepage.
3. Check that the user is able to click on a news article and view its details.
4. Check that the user is able to navigate back to the homepage from the news article details page.

### Other testing scenarios

1. Check that TopNews component renders Timeline component with the latest news.
2. Check that TopNews component shows the LoadingState while data is fetching.
3. Check that TopNews component shows the ErrorState when there is an http error.
4. Check that TopNews component renders the number of news based on screen size.
5. Check that TopNews component renders the Headline component with correct props.
6. Check that NewsList component renders the news based on its popularity.
7. Check that NewsList component shows the LoadingState while data is fetching.
8. Check that NewsList component shows the ErrorState when there is an http error.
9. Check that HomePage component hides the TopNews when the screen size is small.
10. Check that useWindowSize hook updates the state when window is resized.


## Possible app improvements

1. Use Design system with customizable theme
2. Optimize image resources based on user device resoulution, and use webp format
3. Consider React.Suspense for lazy loading
4. Consider more scalable architecture (DDD, Clean architecture)
5. Add localization
6. Handle empty data scenarios
7. Setup feature scope boundaries using eslint (improve dependency hierarchy)

## How to use the App

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
