import { InjectionKey } from "vue";
import { RootState } from "./root";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import validateModule from "./modules/validate";
import langModule from "./modules/lang";
import alertModule from "./modules/alert";

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    validate: validateModule,
    lang: langModule,
    alert: alertModule,
  },
});

export const useStore = () => baseUseStore(key);
