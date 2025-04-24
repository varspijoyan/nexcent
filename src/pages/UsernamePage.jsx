import { useActionState, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe, updateMe } from "../services/api/auth";
import { signIn } from "../store/actions/authActions";
import styles from "../styles/UsernamePage.module.css";

const UsernamePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filledFields, setFilledFields] = useState({
    first_name: "",
    last_name: "",
    generalError: "",
  });
  const [showError, setShowError] = useState({});
  const [state, action, isPending] = useActionState(
    async (prevState, formData) => {
      const first_name = formData.get("first_name");
      const last_name = formData.get("last_name");

      const error = {
        firstNameError: "",
        lastNameError: "",
        generalError: "",
      };

      const firstNameFormat = /^[A-Za-z]+$/;
      const lastNameFormat = /^[A-Za-z]+$/;

      if (!first_name) error.firstNameError = "First name is required";
      else if (!firstNameFormat.test(first_name))
        error.firstNameError = "Incorrect first name format";

      if (!last_name) error.lastNameError = "Last name is required";
      else if (!lastNameFormat.test(last_name))
        error.lastNameError = "Incorrect last name format";

      const haserror = Object.values(error).some((err) => err != "");
      if (haserror) {
        return { error };
      }
      try {
        const res = await updateMe(first_name, last_name);
        if (res.status === 200) {
          const data = await getMe();
          dispatch(signIn(data.result));
          navigate("/");
        }
        return { error: {} };
      } catch (error) {
        error.generalError = "Failed to send the data";
      }
    }
  );

  useEffect(() => {
    if (state?.error) {
      setShowError(state.error);
    }
  }, [state]);

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

  return (
    <div className={styles.usernameContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Username form</h2>
        <form action={action} className={styles.formContainer}>
          <input
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            value={filledFields.first_name}
            onChange={handleChange}
          />
          {showError?.firstNameError && (
            <p className={styles.error}>{showError.firstNameError}</p>
          )}
          <input
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            value={filledFields.last_name}
            onChange={handleChange}
          />
          {showError?.lastNameError && (
            <p className={styles.error}>{showError.lastNameError}</p>
          )}
          <button type="submit" className={styles.btn}>
            {isPending ? "Submitting" : "Submit"}
          </button>
          {showError?.generalError && (
            <p className={styles.error}>{state.error.generalError}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UsernamePage;
