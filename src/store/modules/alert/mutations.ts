import { MutationTree } from "vuex";
import { AlertState } from "./type";
import { AlertMessage } from "@/common/interface/base";

const mutations: MutationTree<AlertState> = {
  ALERT(state, payload: AlertMessage) {
    state.trigger = { ...payload };
  },
};

export default mutations;
