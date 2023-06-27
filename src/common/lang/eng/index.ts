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
import businessEng from "./business";
import blogEng from "./blog";
import adminEng from "./admin";

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
  business: businessEng,
  blog: blogEng,
  admin: adminEng,
};

export type ENG = typeof eng;

export default eng;
