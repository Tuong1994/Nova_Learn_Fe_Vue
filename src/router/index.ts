import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import PhotoLibraryView from "../views/PhotoLibrary/PhotoLibraryView.vue";
import NotableStudentView from "../views/NotableStudent/NotableStudentView.vue";
import CommitmentView from "../views/Commitment/CommitmentView.vue";
import IntroView from "../views/Intro/IntroView.vue";
import ContactView from "../views/Contact/ContactView.vue";
import DisclaimerView from "../views/Disclaimer/DisclaimerView.vue";
import SignInView from "../views/Auth/SignInView.vue";
import SignUpView from "../views/Auth/SignUpView.vue";
import CourseListView from "../views/Course/List/CourseListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/student/photo",
    name: "photo",
    component: PhotoLibraryView,
  },
  {
    path: "/student/notable",
    name: "notable",
    component: NotableStudentView,
  },
  {
    path: "/commitment",
    name: "commitment",
    component: CommitmentView,
  },
  {
    path: "/about/intro",
    name: "intro",
    component: IntroView,
  },
  {
    path: "/about/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about/disclaimer",
    name: "disclaimer",
    component: DisclaimerView,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignInView,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUpView,
  },
  {
    path: "/course/list",
    name: "courseList",
    component: CourseListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
