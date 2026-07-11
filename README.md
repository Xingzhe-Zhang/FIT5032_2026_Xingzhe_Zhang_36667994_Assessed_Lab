# FIT5032_2026_Xingzhe_Zhang_36667994_Assessed_Lab

This repository stores lab work and learning tasks for **FIT5032 Internet Applications Development**. It contains Vue.js projects completed for the assessed labs and will also be used for later assessment work.

The App development code is stored in the private repository [FIT5032_2026_Xingzhe_Zhang](https://github.com/Xingzhe-Zhang/FIT5032_2026_Xingzhe_Zhang_36667994).

## Student Information

- **Name:** Xingzhe Zhang
- **Student ID:** 36667994
- **Course:** FIT5032 Internet Applications Development
- **Semester:** 2026

## Project Structure

```text
FIT5032_2026_Xingzhe_Zhang_36667994/
├── 📁 week1-vue-app/      # Week 1: Vue 3 introductory lab
└── 📁 xzhang-library/     # Week 2 & 3: Library web application labs
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
