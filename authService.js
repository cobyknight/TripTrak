import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail  } from 'firebase/auth';
import { app as firebaseApp } from './firebase'; // Import the initialized app object

const auth = getAuth(firebaseApp);

const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // User signed up successfully
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle sign-up errors
        throw error;
    }
};

const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // User signed in successfully
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle sign-in errors
        throw error;
    }
};

const signOutUser = async () => {
    try {
        await signOut(auth);
        // User signed out successfully
    } catch (error) {
        // An error happened during sign-out
        throw error;
    }
};

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      // Password reset email sent successfully
    } catch (error) {
      // Handle password reset errors
      throw error;
    }
  };

const handleSignUp = async (email, password, setMessage) => {
    try {
        await signUp(email, password);
        setMessage('User signed up successfully');
        // You may want to navigate to a different page or perform other actions upon successful sign-up
    } catch (error) {
        setMessage(`Sign-up failed: ${error.message}`);
    }
};

const handleSignIn = async (email, password, setMessage) => {
    try {
        await signIn(email, password);
        setMessage('User signed in successfully');
        // You may want to navigate to a different page or perform other actions upon successful sign-in
    } catch (error) {
        setMessage(`Sign-in failed: ${error.message}`);
    }
};

const handleSignOut = async (setMessage) => {
    try {
        await signOutUser();
        setMessage('User signed out successfully');
        // You may want to navigate to a different page or perform other actions upon successful sign-out
    } catch (error) {
        setMessage(`Sign-out failed: ${error.message}`);
    }
};

export { signUp, signIn, signOutUser, sendPasswordReset, handleSignUp, handleSignIn, handleSignOut };
