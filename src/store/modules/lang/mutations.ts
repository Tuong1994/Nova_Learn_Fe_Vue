import { MutationTree } from "vuex";
import { LangState } from "./type";
import { ELang } from "@/common/enum/lang";
import eng from "@/common/lang/eng";
import vn from "@/common/lang/vn";

const mutations: MutationTree<LangState> = {
  CHANG_LANG(state, payload: number) {
    if (payload === ELang.ENG) {
      state.type = ELang.ENG;
      state.langs = eng;
    } else {
      state.type = ELang.VN;
      state.langs = vn;
    }
  },
};

export default mutations;
