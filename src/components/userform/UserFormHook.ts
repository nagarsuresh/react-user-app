import { UserFormProps } from './UserForm';
import { FormEvent, useState } from 'react';
import { UserDto } from '../dto/user';


export const useUserFormHook = (props: UserFormProps) => {

  const [formValues, setFormValues] = useState({} as UserDto);

  const [showModal, setShowModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');


  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(formValues);
    if (formValues.name?.trim().length === 0 || !formValues.age) {
      showErrorModal('Please enter a valid name and age (non-empty) values');
      return;
    }
    if (formValues.age <= 0 || formValues.age > 120) {
      showErrorModal('Please enter a valid age(>0 and <120)');
      return;
    }
    const userDto: UserDto = { ...formValues, id: '' + Math.random() }
    props.createUser(userDto);
    setFormValues({} as UserDto);
  }

  const valueChangeHandler = (fieldName: string, value: string) => {
    setFormValues((state) => {
      return { ...state, [fieldName]: value };
    });
  }

  const showErrorModal = (error: string) => {
    setErrorMessage(error);
    setShowModal(true);
  }

  const hideErrorModal = () => {
    setErrorMessage('');
    setShowModal(false);
  }


  return {
    formValues,
    showModal,
    errorMessage,
    hideErrorModal,
    submitHandler,
    valueChangeHandler
  }

}

export default useUserFormHook;