import { initializeApp } from "firebase/app";
import secrets from "../secrets";
import { getAuth, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: secrets.apiKey,
  authDomain: secrets.authDomain,
  projectId: secrets.projectId,
  storageBucket: secrets.storageBucket,
  messagingSenderId: secrets.messagingSenderId,
  appId: secrets.appId
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGitHub = new GithubAuthProvider();
export { auth, providerGitHub, providerGoogle };