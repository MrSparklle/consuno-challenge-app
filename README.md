# Consuno Coding Challenge - Frontend (Joel Darós)

Create a simple React application that shows a list of construction companies, each with the following information:
- Company name
- Logo (you may use a placeholder image, e.g. using https://placekitten.com/)
- Specialties (e.g. Excavation, Plumbing, Electrical)
- City

---

## Steps to run:
** This app depends on his backend to properly work *** 

Please, check the README on backend folder before starts this app.


From the main root of the project (the same folder that this file is located) run the commands bellow:
1. `npm install` 
2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

![](/public/screenshots/01.png)

## Features:
- The app if responsive for web and mobile devices, it has a single media query at 576px.
- Search for a company by typing into a search field. The search term gets matched only against the company name and the list of companies is filtered based on the search term in real time as the user is typing.
- Filter the list using a set of checkboxes to include only those companies which offer a particular speciality (e.g. only Plumbing).
- All unit tests are implemented with minimum 80% coverage, you can run it with `npm test -- --coverage --watchAll=false`

## Future Improvements:
- A big constructors lists needs to be paginated or lazy loaded when user scrols.
- In a real scenario with a big constructors list, search and filter features, needs to be done in the backend. We could to implement a debouce time in realtime seach field to avoid many requests in backend.
- When clicked a constructor card, the app could open a new screen with complete detais about it.
- The avaliable specialties list could be returned from a specific endpoint from the backend.
- Better responsive behaviour, for diferent screen devices (tablets/wearables). (add more media queries). 

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

