import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return (
  <div>
    <h1>Sign In component</h1>
    <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
  </div>
  )
}

export default SignIn;