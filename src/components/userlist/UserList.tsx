import { FC } from "react";
import { UserDto } from "../dto/user";

import UserDisplay from "../userdisplay/UserDisplay";
import styles from './UserList.module.scss';

export interface UserListProps {
  users: UserDto[];
}

const UserList: FC<UserListProps> = (props: UserListProps) => {
  const users = props.users.map((user) => <UserDisplay user={user} key={user.id}></UserDisplay>);
  return <div className={styles.listContainer}>{users}</div>;
};

export default UserList;
