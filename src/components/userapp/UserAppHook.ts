import { UserDto } from '../dto/user';
import { useState } from "react";

const useUserAppHook = () => {

  const initUserList: UserDto[] = [];
  const [userList, setUserList] = useState(initUserList);


  const addNewUser = (userDto: UserDto) => {
    setUserList((state) => {
      return [...state, userDto];
    });
  }


  return {
    userList,
    addNewUser
  }
}

export default useUserAppHook;