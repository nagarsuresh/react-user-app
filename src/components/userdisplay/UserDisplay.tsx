import { FC } from "react";
import { UserDto } from "../dto/user";
import styles from './UserDisplay.module.scss';

export interface UserDisplayProps {
  user: UserDto;
}

const UserDisplay: FC<UserDisplayProps> = (props: UserDisplayProps) => {
  return <div className={styles.row}>
    {props.user.name} ({props.user.age} years old)
  </div>;
};

export default UserDisplay;
