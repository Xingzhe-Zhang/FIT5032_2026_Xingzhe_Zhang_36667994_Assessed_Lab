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
├── 📁 week1-vue-app/          # Lab 1: Vue 3 introductory lab
├── 📁 xzhang-library/         # Lab 2–4: Library web application labs
└── 📁 NoMash-Library/         # Lab 5-7: NoMash Library
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

## Lab Progress
### Lab 1 `week1-vue-app`

Created and ran a Vue 3 project with Vite, added basic components, and committed the project to GitHub.

### Lab 2 `xzhang-library`

The  project starts as a library web application focused on one-way data binding and JSON data rendering.
Imported and displayed JSON data using Vue directives, computed properties, list rendering, conditional rendering, and dynamic binding.

### Lab 3 `xzhang-library`

Built a responsive Bootstrap form with two-way data binding, form submission, clearing, and dynamically displayed user records.

> Note: In Lab4, the Bootstrap card display was replaced by PrimeVue DataTable for better tabular presentation of submitted user records.

### Lab 4 `xzhang-library`

Extended the application with reusable Vue components and client-side form validation.

### Lab 5 `nomash-library`

Implemented a responsive library registration form with input validation and password confirmation.

Demo login credentials:
- Username: `student`
- Password: `Library@123`

### Lab 6 `nomash-library`

Configured Vue Router, login state management, protected routes, redirects, and an access-denied page.

### Lab 7 `nomash-library`
Implemented Firebase email/password registration, login, and logout. Added role1 and role2, stored user roles in the Firestore users collection, and displayed the authenticated user's role.

### Lab 8 `nomash-library`
Implemented an Add Book page and Firestore book management with create, retrieve, update, and delete operations. Added queries using where, orderBy, limit, and their combined use.

