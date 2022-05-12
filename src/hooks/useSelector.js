import useStore from "./useStore";

const useSelector = () => {
  const store = useStore();

  return store.getState();
};

export default useSelector;
