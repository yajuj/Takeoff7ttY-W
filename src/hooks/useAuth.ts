import { useTypedSelector } from './useTypedSelector';

const useAuth = () => {
  return useTypedSelector(state => state.auth);
};

export default useAuth;
