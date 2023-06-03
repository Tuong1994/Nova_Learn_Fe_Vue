import introEng from "./intro";
import commonEng from "./common";
import homeEng from "./home";
import menuEng from "./menu";
import contactEng from "./contact";
import disclaimerEng from "./disclaimer";
import commitmentEng from "./commitment";
import photoEng from "./photo";
import authEng from "./auth";
import courseEng from "./course";

const eng = {
  common: commonEng,
  menu: menuEng,
  home: homeEng,
  photo: photoEng,
  commitment: commitmentEng,
  intro: introEng,
  contact: contactEng,
  disclaimer: disclaimerEng,
  auth: authEng,
  course: courseEng,
};

export type ENG = typeof eng;

export default eng;
