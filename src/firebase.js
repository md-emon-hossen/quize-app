import { initializeApp } from 'firebase/app';

//firebase configration
const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DUMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCCKET,
    messagingSenderId: process.env.REACT_APP_MESSESING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});

export default app;