import { computed } from "vue";
import { useStore } from "@/store";
import { Langs } from "../lang";

const useLang = () => {
  const store = useStore();

  const langs = computed<Langs>(() => store.getters.getLangs);

  return langs;
};

export default useLang;
