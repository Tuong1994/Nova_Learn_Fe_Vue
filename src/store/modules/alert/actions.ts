import { ActionTree } from "vuex";
import { AlertState } from "./type";
import { AlertMessage } from "@/common/interface/base";
import { RootState } from "@/store/root";

const actions: ActionTree<AlertState, RootState> = {
  alert({ commit }, payload: AlertMessage) {
    commit("ALERT", payload);
  },
};

export default actions;