import { useActionState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/RegistrationPage.module.css";
const RegistrationPage = () => {
  const [state, action, isPending] = useActionState(
    async (prevState, formData) => {
      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");

      const errors = {
        usernameError: "",
        emailError: "",
        passwordError: "",
      };

      const usernameFormat = /^[a-z0-9]+$/;
      const emailFormat = /^\w+@(?:gmail|yahoo|outlook|hotmail|live|icloud|aol|protonmail)\.\w{2,}$/;
      const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

      if (!username) 
        errors.usernameError = "Username is required";
      else if (!usernameFormat.test(username))
        errors.usernameError = "Incorrect username format";

      if (!email) 
        errors.emailError = "Email is required";
      else if (!emailFormat.test(email))
        errors.emailError = "Incorrect email format";

      if (!password) 
        errors.passwordError = "Password is required";
      else if (!passwordFormat.test(password))
        errors.passwordError = "Incorrect password format";

      if (Object.values(errors).some((error) => error != "")) {
        return { errors };
      }

      return { errors: {} };
    }
  );

  const handleChange = (e) => {
    action(new FormData(e.target.form));
  };

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Registration Page</h2>
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
            type="email"
            name="email"
            placeholder="Enter your email"
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
          <button type="submit" className={styles.btn}>
            {isPending ? "Sumbitting" : "Submit"}
          </button>
          <p className={styles.link}>
            Already have an account? <Link to="/login-page">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
