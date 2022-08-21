import { ChangeEvent, FC } from "react";
import { UserDto } from "../dto/user";
import Modal from "../modal/Modal";
import styles from "./UserForm.module.scss";
import useUserFormHook from "./UserFormHook";

export interface UserFormProps {
  createUser: (user: UserDto) => void;
}

const UserForm: FC<UserFormProps> = (props: UserFormProps) => {
  const {
    formValues,
    submitHandler,
    valueChangeHandler,
    errorMessage,
    showModal,
    hideErrorModal,
  } = useUserFormHook(props);

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.fieldContainer}>
          <label htmlFor="name">Username</label>
          <input
            value={formValues.name || ""}
            type="text"
            name="name"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              valueChangeHandler("name", event.target.value)
            }
          />
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={formValues.age || ""}
            type="number"
            name="age"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              valueChangeHandler("age", event.target.value)
            }
          />
        </div>
        <button className={styles.btnSubmit}>Add User</button>
      </form>
      {showModal ? (
        <Modal
          title="Invalid Input"
          message={errorMessage}
          callback={() => hideErrorModal()}
        ></Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserForm;
