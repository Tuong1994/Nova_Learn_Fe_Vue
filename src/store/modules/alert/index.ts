import { Module } from "vuex";
import { AlertState } from "./type";
import { RootState } from "@/store/root";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: AlertState = {
  trigger: {
    active: false,
    message: "Alert message",
    type: "success",
  },
};

const alertModule: Module<AlertState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};

export default alertModule;
