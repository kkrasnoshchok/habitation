import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import * as yup from "yup";
import { firebaseAuth, firebaseDB } from "../../utils/firebase";
import { AuthFormikInitValues } from "./types";

export const initialValues: AuthFormikInitValues = {
  email: "",
  password: "",
};

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Not a proper email")
    .required("E-Mail field is required to authorize"),
  password: yup
    .string()
    .min(8, "Password should contain minimum 8 characters")
    .required("Password field is required to authorize"),
});

type AuthFunctions = (values: AuthFormikInitValues) => Promise<void>;

export const signIn: AuthFunctions = async (values) => {
  const result = await signInWithEmailAndPassword(
    firebaseAuth,
    values.email,
    values.password
  );
  console.log("Logged in with: ", result.user.email);
};

export const signUp: AuthFunctions = async (values) => {
  const {
    user: { email, uid },
  } = await createUserWithEmailAndPassword(
    firebaseAuth,
    values.email,
    values.password
  );
  const userRef = doc(firebaseDB, "users", uid);
  const userData = {
    email,
    greetingName: null,
    birthday: null,
    weight: null,
    height: null,
    habits: null,
    habitsStreak: 0,
    sawOnBoarding: false,
  };
  await setDoc(userRef, userData);
};

export const onSubmit: AuthFunctions = async (values) => {
  console.log("onSubmit");
  try {
    await signIn(values);
  } catch (e) {
    const userNotFound =
      e instanceof FirebaseError && e.code === "auth/user-not-found";
    if (userNotFound) {
      try {
        await signUp(values);
      } catch (e) {
        console.error("error: ", e);
      }
    }
  }
};
