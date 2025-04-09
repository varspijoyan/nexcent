import { useActionState } from "react";
import styles from "../styles/UsernamePage.module.css";
import { useDispatch } from "react-redux";
import { getMe, updateMe } from "../services/api/auth";
import { signIn } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const UsernamePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, action, isPending] = useActionState(
        async (prevState, formData) => {
            const first_name = formData.get("first_name");
            const last_name = formData.get("last_name");

            const errors = {
                firstNameError: "",
                lastNameError: "",
                generalError: ""
            };

            const firstNameFormat = /^[A-Za-z]+$/;
            const lastNameFormat = /^[A-Za-z]+$/;

            if(!first_name)
                errors.firstNameError = "First name is required";
            else if(!firstNameFormat.test(first_name))
                errors.firstNameError = "Incorrect first name format";

            if(!last_name)
                errors.lastNameError = "Last name is required";
            else if(!lastNameFormat.test(last_name))
                errors.lastNameError = "Incorrect last name format";

            const hasErrors = Object.values(errors).some(err => err != "");
            if(hasErrors) {
                return { errors };
            }
            try {
                const res = await updateMe(first_name, last_name);
                if(res.status === 200) {
                    const data = await getMe();
                    dispatch(signIn(data.result));
                    navigate('/')
                }
                return { errors: {} }
            } catch (error) {
                errors.generalError = "Failed to send the data";
            }
        }
    );
    return (
        <div className={styles.usernameContainer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Username form</h2>
                <form action={action} className={styles.formContainer}>
                    <input type="text" name="first_name" placeholder="Enter your first name" />
                    {state?.errors?.firstNameError && (
                        <p className={styles.error}>{state.errors.firstNameError}</p>
                    )}
                    <input type="text" name="last_name" placeholder="Enter your last name" />
                    {state?.errors?.lastNameError && (
                        <p className={styles.error}>{state.errors.lastNameError}</p>
                    )}
                    <button type="submit" className={styles.btn}>{isPending ? "Submitting" : "Submit"}</button>
                    {state?.errors?.generalError && (
                        <p className={styles.error}>{state.error.generalError}</p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default UsernamePage;