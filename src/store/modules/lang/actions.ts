import { ActionTree } from "vuex";
import { LangState } from "./type";
import { RootState } from "@/store/root";

const actions: ActionTree<LangState, RootState> = {
  changeLang({ commit }, payload: number) {
    commit("CHANG_LANG", payload);
  },
};

export default actions;
