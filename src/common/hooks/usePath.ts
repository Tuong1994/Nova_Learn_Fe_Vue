import { useRouter } from "vue-router";

const usePath = () => {
  const router = useRouter();

  const currentPath = router.currentRoute.value.fullPath;
};

export default usePath();
