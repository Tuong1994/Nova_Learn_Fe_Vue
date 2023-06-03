import { ActionTree } from "vuex";
import { ValidateState } from "./type";
import { RootState } from "@/store/root";
import { FieldValue } from "@/common/interface/base";

const actions: ActionTree<ValidateState, RootState> = {
  isInValid({ commit }, payload: FieldValue) {
    commit("SET_INVALID", payload);
  },
  isValid({ commit }, payload: FieldValue) {
    commit("SET_VALID", payload);
  },
  isError({commit}, payload: FieldValue) {
    commit("SET_ERROR", payload)
  }
};

export default actions;
