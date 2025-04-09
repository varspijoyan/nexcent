import { useActionState, useState } from "react";
import { api } from "../services/api/api";
import { login, verify } from "../services/api/auth";
import styles from "../styles/SignInPage.module.css";
import UsernamePage from "./UsernamePage";

const SignInPage = () => {
  const [isOtpFieldShow, setOtpFieldShow] = useState(false); // to show otp input field
  const [isOtpVerified, setOtpVerified] = useState(false); // to show username form after otp verification
  const [state, action, isPending] = useActionState(
    async (prevState, formData) => {
      const email = formData.get("email");
      const otp = formData.get("otp");

      const errors = {
        emailError: "",
        otpError: "",
      };

      const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (otp) {
        if (!otp) {
          errors.otpError = "OTP is required";
        } else {
          try {
            const data = await verify(email, otp);
            if (data.status === 200) {
              const accessToken = data.result.accessToken;
              localStorage.setItem("accessToken", accessToken);
              api.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${accessToken}`;
              setOtpVerified(true);
            }
          } catch (error) {
            errors.otpError = "Something went wrong while trying to verify";
          }
        }
      } else {
        if (!email) {
          errors.emailError = "Email is required";
        } else if (!emailFormat.test(email)) {
          errors.emailError = "Invalid email format";
        } else {
          try {
            const data = await login(email);
            if (data.status === 200) {
              setOtpFieldShow(true);
            }
          } catch (error) {
            errors.emailError = "Something went wrong while sending the email";
          }
        }
      }

      const hasErrors = Object.values(errors).some((err) => err != "");
      if (hasErrors) {
        return { errors }; // Return the errors object if any errors exist
      }

      return { errors: {} }; // Return an empty errors object if no errors
    }
  );

  return (
    <>
      {isOtpVerified ? (
        <UsernamePage />
      ) : (
        <div className={styles.signInPageContainer}>
          <div className={styles.container}>
            <h2 className={styles.title}>Sign In Page</h2>
            <form className={styles.formContainer} action={action}>
              <input type="email" name="email" placeholder="Enter your email" />
              {state?.errors?.emailError && (
                <p className={styles.error}>{state.errors.emailError}</p>
              )}
              {isOtpFieldShow && (
                <>
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter otp verification"
                  />
                  {state?.errors?.otpError && (
                    <p className={styles.error}>{state.errors.otpError}</p>
                  )}
                </>
              )}
              <button type="submit" className={styles.btn}>
                {isPending ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInPage;
