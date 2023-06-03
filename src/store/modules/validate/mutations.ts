import { MutationTree } from "vuex";
import { ValidateState } from "./type";
import { FieldValue } from "@/common/interface/base";

const mutations: MutationTree<ValidateState> = {
  SET_INVALID(state, payload: FieldValue) {
    state.inValid = true;
    state.error = payload
  },
  SET_VALID(state, payload: FieldValue) {
    state.inValid = false;
    state.error = payload
  },
  SET_ERROR(state, payload: FieldValue) {
    state.error = payload
  }
};

export default mutations;
