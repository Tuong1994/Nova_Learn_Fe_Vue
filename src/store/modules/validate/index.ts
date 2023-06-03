import { Module } from "vuex";
import { ValidateState } from "./type";
import { RootState } from "@/store/root";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state: ValidateState = {
  inValid: false,
  error: {},
};

const validateModule: Module<ValidateState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};

export default validateModule;
