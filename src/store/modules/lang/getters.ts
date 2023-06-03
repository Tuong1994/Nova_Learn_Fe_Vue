import { GetterTree } from "vuex";
import { LangState } from "./type";
import { RootState } from "@/store/root";
import { Langs } from "@/common/lang";

const getters: GetterTree<LangState, RootState> = {
  getType(state): number {
    return state.type;
  },
  getLangs(state): Langs {
    return state.langs;
  },
};

export default getters;
