import { GetterTree } from "vuex";
import { AlertState } from "./type";
import { AlertMessage } from "@/common/interface/base";
import { RootState } from "@/store/root";

const getters: GetterTree<AlertState, RootState> = {
  getTrigger(state): AlertMessage {
    return state.trigger;
  },
};

export default getters;
