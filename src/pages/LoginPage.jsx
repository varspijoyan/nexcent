import { useActionState } from "react";
import styles from "../styles/LoginPage.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [state, action, isPending] = useActionState(
    async (prevState, formData) => {
        const email = formData.get("email");
        const password = formData.get("password");

        const errors = {
            emailError: "",
            passwordError: ""
        };

        const emailFormat = /^\w+@(?:gmail|yahoo|outlook|hotmail|live|icloud|aol|protonmail)\.\w{2,}$/;
        const passwordFormat =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

        if(!email) 
            errors.emailError = "Email is required";
        else if(!emailFormat.test(email))
            errors.emailError = "Incorrect email format";

        if(!password)
            errors.passwordError = "Password is required";
        else if(!passwordFormat.test(password))
            errors.passwordError = "Incorrect password format";

        if(Object.values(errors).some(error => error != "")) {
            return {errors}
        }

        return {errors: {}}
    }
  );

  const handleChange = (e) => {
    action(new FormData(e.target.form));
  }

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login Page</h2>
        <form action={action} className={styles.formContainer}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
          {state?.errors?.emailError && (
            <p className={styles.error}>{state.errors.emailError}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          {state?.errors?.passwordError && (
            <p className={styles.error}>{state.errors.passwordError}</p>
          )}
          <button className={styles.btn} type="submit">
            Submit
          </button>
          <p className={styles.link}>Don't have an account? <Link to="/registration-page">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
