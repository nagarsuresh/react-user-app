import UserForm from "../userform/UserForm";
import UserList from "../userlist/UserList";
import useUserAppHook from "./UserAppHook";
import styles from "./UserApp.module.scss";
import { UserDto } from "../dto/user";

const UserApp = () => {
  const { userList, addNewUser } = useUserAppHook();

  return (
    <div className={styles.container}>
      <UserForm
        createUser={(userDto: UserDto) => {
          addNewUser(userDto);
        }}
      ></UserForm>
      <UserList users={userList}></UserList>
    </div>
  );
};

export default UserApp;
