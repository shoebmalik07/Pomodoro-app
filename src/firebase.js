import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDATNKSCJge05O047NY1dpbz7osDAo29ys",
  authDomain: "pomodoro-app-3deca.firebaseapp.com",
  projectId: "pomodoro-app-3deca",
  storageBucket: "pomodoro-app-3deca.appspot.com",
  messagingSenderId: "377925308220",
  appId: "1:377925308220:web:0d187c27c45c1ab5709839",
  measurementId: "G-X0LKBQG8DR",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
