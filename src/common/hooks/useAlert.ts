import { useStore } from "@/store";

const useAlert = () => {
  const store = useStore();

  const success = (message: string) => {
    store.dispatch("alert", {
      active: true,
      message,
      type: "success",
    });
  };

  const error = (message: string) => {
    store.dispatch("alert", {
      active: true,
      message,
      type: "error",
    });
  };

  return { success, error };
};

export default useAlert;
