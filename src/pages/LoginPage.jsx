import { useActionState } from "react";
import styles from "../styles/LoginPage.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [state, action, isPending] = useActionState(
    async (prevState, formData) => {
      const username = formData.get("username");
      const password = formData.get("password");

      const errors = {
        usernameError: "",
        passwordError: "",
      };

      const usernameFormat = /^[a-z0-9]+$/;
      const passwordFormat =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

      if (!username) errors.usernameError = "Username is required";
      else if (!usernameFormat.test(username))
        errors.usernameError = "Incorrect username format";

      if (!password) errors.passwordError = "Password is required";
      else if (!passwordFormat.test(password))
        errors.passwordError = "Incorrect password format";

      if (Object.values(errors).some((err) => err != "")) {
        return { errors };
      }

      return { errors: {} };
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
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
          />
          {state?.errors?.usernameError && (
            <p className={styles.error}>{state.errors.usernameError}</p>
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
          <button className={styles.btn}>{isPending ? "Submitting" : "Submit"}</button>
          <p>Don't have an account yet? <Link to="/registration-page">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
