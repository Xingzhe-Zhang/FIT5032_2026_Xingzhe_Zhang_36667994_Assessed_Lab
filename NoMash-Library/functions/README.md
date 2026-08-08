# Alibaba Cloud Function Compute

This function provides the `GetBookCount` API for Lab 9. It reads the
Firestore `books` collection with Firebase Admin SDK and returns the number of
documents as JSON.

## Local package setup

```sh
npm install
```

The function entry point is `index.handler`.

## Alibaba Cloud deployment

1. Open Alibaba Cloud Function Compute and create a Web Function named
   `countBooks`.
2. Select Custom Runtime > Node.js 20.
3. Upload this folder, including `index.js`, `package.json`,
   `package-lock.json`, and `node_modules`.
4. Set the startup command to `npm run start` and the listening port to
   `9000`.
5. Add an HTTP trigger with anonymous access for this lab.
6. Add an environment variable named
   `FIREBASE_SERVICE_ACCOUNT_JSON`. Its value is the complete Firebase service
   account JSON from the Firebase project. Do not commit this value.
7. Deploy the function and copy the HTTP trigger URL.

Create a local `.env` file in the Vue project and set:

```sh
VITE_COUNT_BOOKS_URL=https://your-function-endpoint
```

Run `npm run build` again after setting the URL, then upload the new `dist`
contents to the static host. The function allows the browser's CORS request
from the Vue application.
