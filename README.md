# FIT5032_2026_Xingzhe_Zhang_36667994_Assessed_Lab

This repository stores lab work and learning tasks for **FIT5032 Internet Applications Development**. It contains Vue.js projects completed for the assessed labs and will also be used for later assessment work.

🚨 The App development code is stored in the private repository [FIT5032_2026_Xingzhe_Zhang_36667994](https://github.com/Xingzhe-Zhang/FIT5032_2026_Xingzhe_Zhang_36667994).

## Student Information

- **Name:** Xingzhe Zhang
- **Student ID:** 36667994
- **Course:** FIT5032 Internet Applications Development
- **Semester:** 2026

## Project Structure

```text
FIT5032_2026_Xingzhe_Zhang_36667994_Assessed_Lab/
├── 📁 week1-vue-app/          # Week 1: Vue 3 introductory lab
├── 📁 xzhang-library/         # Week 2–4: Library web application labs
└── 📁 NoMash-Library/   # Week 5: Events, Vue DevTools and Vue Router lab
```

## Running a Project

Open a terminal in the required project folder, install dependencies and start the development server.

```sh
cd week1-vue-app
npm install
npm run dev
```

or:

```sh
cd xzhang-library
npm install
npm run dev
```

Then open the localhost URL shown in the terminal, for example:

```text
http://localhost:5173/
```

## Week 1: Intro to Vue JS 3

The `week1-vue-app` project introduces the basic Vue.js 3 development workflow.

Main tasks:

- Set up Visual Studio Code, Node.js and npm
- Create and run a Vue.js 3 project with Vite
- Test the application on localhost
- Create a `MyName.vue` component
- Display the student name on the welcome page
- Commit the work to GitHub

Technologies used:

- Vue.js 3
- Vite
- Node.js
- npm
- Visual Studio Code
- GitHub

## Week 2: One-Way Data Binding in Vue JS 3

The `xzhang-library` project starts as a library web application focused on one-way data binding and JSON data rendering.

Main tasks:

- Import `authors.json` and `bookstores.json`
- Display JSON data in `JSON.vue`
- Use computed properties to process data
- Render lists with `v-for`
- Show conditional messages with `v-if` and `v-else`
- Use attribute, class and style binding
- Highlight George Orwell with dynamic styling

Key files:

- `src/components/JSON.vue`
- `src/assets/json/authors.json`
- `src/assets/json/bookstores.json`

Technologies used:

- Vue.js 3 Composition API
- `ref`
- `computed`
- `v-for`
- `v-if` / `v-else`
- `v-bind`
- Class and style binding
- JSON data import

## Week 3: Styling with CSS and Bootstrap in Vue JS 3

Week 3 extends the `xzhang-library` project by adding Bootstrap 5 and a responsive user information form.

Main features:

- Create a reusable `Form.vue` component
- Render `Form.vue` in `App.vue`
- Build a user information form with Bootstrap styling
- Manage form data with Vue 3 Composition API and `ref`
- Use `v-model` for two-way form binding
- Use `@submit.prevent` to handle form submission
- Store submitted user data in `submittedCards`
- Display submitted data as Bootstrap cards
- Provide a Clear button that resets the current form only
- Use Bootstrap grid breakpoints for responsive layout

Form fields:

- Username
- Password
- Australian Resident checkbox
- Reason For Joining
- Gender dropdown

Key files:

- `src/App.vue`
- `src/components/Form.vue`
- `src/main.js`
- `src/style.css`

Technologies used:

- Vue.js 3
- Vite
- Bootstrap 5
- JavaScript
- HTML
- CSS

Bootstrap classes used include `container`, `row`, `col-12`, `col-sm-10`, `col-md-8`, `col-lg-6`, `mx-auto`, `form-control`, `form-check`, `form-select`, `btn`, `btn-primary`, `btn-secondary` and `card`.

> Note: In Week 4, the Bootstrap card display was replaced by PrimeVue DataTable for better tabular presentation of submitted user records.

## Week 4: Form Validation and PrimeVue DataTable

Week 4 extends the `xzhang-library` project by adding form validation and replacing the submitted user cards with a PrimeVue DataTable.

Main features:

- Demonstrate HTML built-in validation using attributes such as `required`, `minlength`, and `maxlength`
- Implement Vue-based custom validation in `Form.vue`
- Store validation errors in a reactive `errors` object
- Validate username length
- Validate password strength using length, uppercase, lowercase, number, and special character checks
- Add extra validations for gender selection and reason length
- Prevent invalid form submissions
- Display customised validation messages using Bootstrap text utility classes
- Install and configure PrimeVue with the Aura theme
- Display submitted user information using PrimeVue DataTable

Form validations:

- Username must be at least 3 characters
- Password must be at least 8 characters
- Password must contain uppercase, lowercase, number, and special character
- Gender must be selected
- Reason for joining must be between 10 and 200 characters

Key files:

- `src/components/Form.vue`
- `src/main.js`
- `package.json`

Technologies used:

- Vue.js 3 Composition API
- `ref`
- `v-model`
- `@blur`
- `@input`
- `@submit.prevent`
- Bootstrap 5
- PrimeVue
- `@primevue/themes`
- PrimeVue DataTable

## Week 5: Events, Vue DevTools and Vue Router

Week 5 extends the NoMash Library starter project by adding additional event handling, component debugging with Vue DevTools, and routing functionality with Vue Router.

Main features:

- Add a Confirm Password field to the library registration form
- Validate whether Password and Confirm Password match
- Use `@blur` to trigger confirm password validation after the user leaves the field
- Display `Passwords do not match.` when the two password fields are different
- Add a green feedback message when Reason For Joining contains the word `friend`
- Add a Suburb field using `v-bind:value` to demonstrate one-way data binding
- Use Vue DevTools to inspect component state and compare `v-model` with `v-bind`
- Install and configure Vue Router
- Move the registration form into `src/views/HomeView.vue`
- Create `AboutView.vue`, `LoginView.vue`, and `AccessDeniedView.vue`
- Use `router-view` to render route components
- Use `router-link` for navigation
- Protect the About page using a navigation guard
- Redirect unauthenticated users to Login
- Show Access Denied for invalid login attempts
- Show Login or Logout based on authentication state

Demo login credentials:

- Username: `student`
- Password: `Library@123`

Key files:

- `src/views/HomeView.vue`
- `src/views/AboutView.vue`
- `src/views/LoginView.vue`
- `src/views/AccessDeniedView.vue`
- `src/router/index.js`
- `src/components/BHeader.vue`
- `src/auth.js`
- `src/App.vue`
- `src/main.js`

Technologies used:

- Vue.js 3 Composition API
- Vue Router
- Navigation guards
- `router-link`
- `router-view`
- `v-model`
- `v-bind`
- `@blur`
- `@input`
- `@submit.prevent`
- `@click`
- Vue DevTools
- Bootstrap 5
- PrimeVue

