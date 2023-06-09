import { computed } from "vue";
import { useStore } from "@/store";
import { Langs } from "../lang";

const useLang = () => {
  const store = useStore();

  const langs = computed<Langs>(() => store.getters.getLangs);

  const type = computed<number>(() => store.getters.getType);

  return { langs, type };
};

export default useLang;
