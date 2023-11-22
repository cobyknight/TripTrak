import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { app as firebaseApp } from './firebase'; // Import the initialized app object

const auth = getAuth(firebaseApp);

const signUp = async (email, password, firstName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: firstName });
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

const handleSignUp = async (email, password, firstName, setMessage) => {
    try {
        await signUp(email, password, firstName);
        setMessage('User signed up successfully');
    } catch (error) {
        setMessage(`Sign-up failed: ${error.message}`);
    }
};

const handleSignIn = async (email, password, setMessage) => {
    try {
        await signIn(email, password);
        setMessage('User signed in successfully');
    } catch (error) {
        setMessage(`Sign-in failed: ${error.message}`);
    }
};

const handleSignOut = async (setMessage) => {
    try {
        await signOutUser();
        setMessage('User signed out successfully');
    } catch (error) {
        setMessage(`Sign-out failed: ${error.message}`);
    }
};

export { signUp, signIn, signOutUser, sendPasswordReset, handleSignUp, handleSignIn, handleSignOut };
