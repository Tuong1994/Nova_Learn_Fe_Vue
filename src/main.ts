import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEye,
  faGear,
  faStar,
  faList,
  faFlag,
  faPlus,
  faBars,
  faUser,
  faPlay,
  faTimes,
  faMinus,
  faCheck,
  faTrash,
  faGlobe,
  faSearch,
  faQrcode,
  faSignOut,
  faMessage,
  faEyeSlash,
  faBuilding,
  faHandshake,
  faAngleDown,
  faAngleLeft,
  faHorseHead,
  faAngleRight,
  faTelevision,
  faNoteSticky,
  faTimesCircle,
  faPeopleGroup,
  faCheckDouble,
  faUserGraduate,
  faFireFlameCurved,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { store, key } from "./store";
import App from "./App.vue";
import router from "./router";
import "./styles/main.scss";

library.add(
  faEye,
  faGear,
  faList,
  faStar,
  faUser,
  faPlay,
  faFlag,
  faPlus,
  faBars,
  faTimes,
  faCheck,
  faMinus,
  faTrash,
  faGlobe,
  faSearch,
  faQrcode,
  faMessage,
  faSignOut,
  faEyeSlash,
  faBuilding,
  faHorseHead,
  faHandshake,
  faAngleDown,
  faAngleLeft,
  faNoteSticky,
  faTelevision,
  faAngleRight,
  faCheckDouble,
  faPeopleGroup,
  faTimesCircle,
  faUserGraduate,
  faFireFlameCurved,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faHandHoldingDollar
);

createApp(App)
  .use(store, key)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
