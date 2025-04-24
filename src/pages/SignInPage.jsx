import { useActionState, useEffect, useState } from "react";
import { api } from "../services/api/api";
import { login, verify } from "../services/api/auth";
import styles from "../styles/SignInPage.module.css";
import UsernamePage from "./UsernamePage";

const SignInPage = () => {
  const [isOtpFieldShow, setOtpFieldShow] = useState(false); // to show otp input field
  const [isOtpVerified, setOtpVerified] = useState(false); // to show username form after otp verification
  const [filledFields, setFilledFields] = useState({
    email: "",
    otp: "",
  });
  const [showError, setShowError] = useState({});
  const [state, action, isPending] = useActionState(
    async (prevState, formData) => {
      const email = formData.get("email");
      const otp = formData.get("otp");

      const error = {
        emailError: "",
        otpError: "",
      };

      const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (otp) {
        if (!otp) {
          error.otpError = "OTP is required";
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
            error.otpError = "Something went wrong while trying to verify";
          }
        }
      } else {
        if (!email) {
          error.emailError = "Email is required";
        } else if (!emailFormat.test(email)) {
          error.emailError = "Invalid email format";
        } else {
          try {
            const data = await login(email);
            if (data.status === 200) {
              setOtpFieldShow(true);
            }
          } catch (error) {
            error.emailError = "Something went wrong while sending the email";
          }
        }
      }

      const haserror = Object.values(error).some((err) => err != "");
      if (haserror) {
        return { error }; // Return the error object if any error exist
      }

      return { error: {} }; // Return an empty error object if no error
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilledFields((prev) => ({
      ...prev,
      [name]: value,
    }));

    setShowError((prev) => ({
      ...prev,
      [`${name}Error`]: "",
    }));
  };

  useEffect(() => {
    if(state?.error) {
      setShowError(state.error)
    }
  }, [state])
  return (
    <>
      {isOtpVerified ? (
        <UsernamePage />
      ) : (
        <div className={styles.signInPageContainer}>
          <div className={styles.container}>
            <h2 className={styles.title}>Sign In Page</h2>
            <form className={styles.formContainer} action={action}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={filledFields.email}
                onChange={handleChange}
              />
              {showError?.emailError && (
                <p className={styles.error}>{showError.emailError}</p>
              )}
              {isOtpFieldShow && (
                <>
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter otp verification"
                    value={filledFields.otp}
                    onChange={handleChange}
                  />
                  {showError?.otpError && (
                    <p className={styles.error}>{showError.otpError}</p>
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
