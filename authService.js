// Importing necessary Firebase authentication functions
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app as firebaseApp } from './firebase'; // Import the initialized app object

// Creating an authentication instance using the initialized Firebase app
const auth = getAuth(firebaseApp);

// Function for user sign-up with email, password, and first name
const signUp = async (email, password, firstName) => {
    try {
        // Creating a new user account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Updating the user profile with the provided first name
        await updateProfile(user, { displayName: firstName });

        // User signed up successfully
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handling sign-up errors
        throw error;
    }
};

// Function for user sign-in with email and password
const signIn = async (email, password) => {
    try {
        // Signing in the user with the provided credentials
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // User signed in successfully
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handling sign-in errors
        throw error;
    }
};

// Function for user sign-out
const signOutUser = async () => {
    try {
        // Signing out the current user
        await signOut(auth);
        // User signed out successfully
    } catch (error) {
        // An error happened during sign-out
        throw error;
    }
};

// Function to handle the entire sign-up process with additional validation
const handleSignUp = async (email, password, retypePassword, firstName, setMessage) => {
    try {
        // Checking if the entered passwords match
        if (password !== retypePassword) {
            throw new Error('Passwords do not match');
        }
        
        // Calling the signUp function to perform the sign-up process
        await signUp(email, password, firstName);
        
        // Setting a success message
        setMessage('User signed up successfully');
    } catch (error) {
        // Setting an error message in case of failure
        setMessage(`Sign-up failed: ${error.message}`);
    }
};

// Function to handle the entire sign-in process
const handleSignIn = async (email, password, setMessage) => {
    try {
        // Calling the signIn function to perform the sign-in process
        await signIn(email, password);
        
        // Setting a success message
        setMessage('User signed in successfully');
    } catch (error) {
        // Setting an error message in case of failure
        setMessage(`Sign-in failed: ${error.message}`);
    }
};

// Function to handle the sign-out process
const handleSignOut = async (setMessage) => {
    try {
        // Calling the signOutUser function to perform the sign-out process
        await signOutUser();
        
        // Setting a success message
        setMessage('User signed out successfully');
    } catch (error) {
        // Setting an error message in case of failure
        setMessage(`Sign-out failed: ${error.message}`);
    }
};

// Exporting the functions for external use
export { signUp, signIn, signOutUser, handleSignUp, handleSignIn, handleSignOut };
