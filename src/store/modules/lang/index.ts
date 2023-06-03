import { Module } from "vuex";
import { ELang } from "@/common/enum/lang";
import { LangState } from "./type";
import { RootState } from "@/store/root";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import eng from "@/common/lang/eng";

const state: LangState = {
  type: ELang.ENG,
  langs: eng,
};

const langModule: Module<LangState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};

export default langModule;
