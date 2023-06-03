import { InjectionKey } from "vue";
import { RootState } from "./root";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import validateModule from "./modules/validate";
import langModule from "./modules/lang";

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    validate: validateModule,
    lang: langModule,
  },
});

export const useStore = () => baseUseStore(key);
