# Test Project Tweets Cards

## Task Overview

- Display a list of user cards with user information.
- Each card should include user details, follower count, and a "Follow" button
  to follow/unfollow the user.
- When the "Follow" button is clicked, the button text should change to
  "Following" and the button color should change. The follower count should
  increase by 1.
- When the page is refreshed, the changes should persist. The button should
  remain in the "Following" state with the corresponding color, and the follower
  count should not reset to the initial value.
- When the "Follow" button is clicked again, the button text and color should
  revert to their original state. The follower count should decrease by 1.
- The number 100,500 should be represented as a single value (100500) in the
  code, but displayed with a comma (100,500) in the UI.
- Create a custom backend for development using the mockapi.io service.
- Create a "users" resource with user objects as described below.

## Routing

Implement routing using React Router with the following routes:

- `'/'` for the home page
- `'/tweets'` for the tweets page If a user accesses a non-existent route, they
  should be redirected to the Home page.

## Project Structure

The project utilizes the following technologies and libraries:

- React for building the user interface
- React Router for handling routing
- Axios for getting data from Api
- Redux for component state
- Emotion/Styled for creating styled components

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install`.
3. Start the project by running `npm start`.
4. Open your browser and navigate to `http://localhost:3000`.

## Technologies and Libraries

- [React](https://legacy.reactjs.org/docs/react-dom.html)
- [Redux](https://redux.js.org/)
- [React Router](https://github.com/remix-run/react-router/tree/dev/examples)
- [Axios](https://axios-http.com/ru/docs/intro)
