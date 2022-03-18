import { useTypedSelector } from './useTypedSelector';

const useContacts = () => {
  return useTypedSelector(state => state.contacts);
};

export default useContacts;
