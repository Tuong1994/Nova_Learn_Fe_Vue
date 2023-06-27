import introVn from "./intro";
import commonVn from "./common";
import homeVn from "./home";
import menuVn from "./menu";
import contactVn from "./contact";
import disclaimerVn from "./disclaimer";
import commitmentVn from "./commitment";
import photoVn from "./photo";
import authVn from "./auth";
import courseVn from "./course";
import businessVn from "./business";
import blogVn from "./blog";
import adminVn from "./admin";

const vn = {
  common: commonVn,
  menu: menuVn,
  home: homeVn,
  photo: photoVn,
  commitment: commitmentVn,
  intro: introVn,
  contact: contactVn,
  disclaimer: disclaimerVn,
  auth: authVn,
  course: courseVn,
  business: businessVn,
  blog: blogVn,
  admin: adminVn,
};

export type VN = typeof vn;

export default vn;
