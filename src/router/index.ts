import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Main/Home/HomeView.vue";
import BusinessView from "../views/Main/Business/BusinessView.vue";
import BlogView from "../views/Main/Blog/BlogView.vue";
import BlogListView from "../views/Main/Blog/List/BlogListView.vue";
import BlogDetailView from "../views/Main/Blog/Detail/BlogDetailView.vue";
import PhotoLibraryView from "../views/Main/PhotoLibrary/PhotoLibraryView.vue";
import NotableStudentView from "../views/Main/NotableStudent/NotableStudentView.vue";
import CommitmentView from "../views/Main/Commitment/CommitmentView.vue";
import IntroView from "../views/Main/Intro/IntroView.vue";
import ContactView from "../views/Main/Contact/ContactView.vue";
import DisclaimerView from "../views/Main/Disclaimer/DisclaimerView.vue";
import SignInView from "../views/Main/Auth/SignInView.vue";
import SignUpView from "../views/Main/Auth/SignUpView.vue";
import StudentView from "../views/Main/Student/StudentView.vue";
import CourseListView from "../views/Main/Course/List/CourseListView.vue";
import CourseDetailView from "../views/Main/Course/Detail/CourseDetailView.vue";
import AdminCategoryListView from "../views/Admin/Category/List/AdminCategoryListView.vue";
import AdminCategoryFormView from "../views/Admin/Category/Form/AdminCategoryFormView.vue";
import AdminCourseFormView from "../views/Admin/Course/Form/AdminCourseFormView.vue";
import AdminCourseListView from "../views/Admin/Course/List/AdminCourseListView.vue";
import AdminTopicListView from "../views/Admin/Topic/List/AdminTopicListView.vue";
import AdminTopicFormView from "../views/Admin/Topic/Form/AdminTopicFomView.vue";
import AdminStudentListView from "../views/Admin/Student/List/AdminStudentListView.vue";
import AdminStudentFormView from "../views/Admin/Student/Form/AdminStudentFormView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/business",
    name: "business",
    component: BusinessView,
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
    path: "/student",
    name: "student",
    component: StudentView,
  },
  {
    path: "/course/list",
    name: "courseList",
    component: CourseListView,
  },
  {
    path: "/course/detail/:id",
    name: "courseDetail",
    component: CourseDetailView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    children: [
      { path: "", component: BlogListView },
      { path: "list", component: BlogListView },
      { path: "detail", component: BlogDetailView },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    children: [
      { path: "", component: AdminCategoryListView },
      { path: "category/list", component: AdminCategoryListView },
      { path: "category/form", component: AdminCategoryFormView },
      { path: "course/list", component: AdminCourseListView },
      { path: "course/form", component: AdminCourseFormView },
      { path: "topic/list", component: AdminTopicListView },
      { path: "topic/form", component: AdminTopicFormView },
      { path: "student/list", component: AdminStudentListView },
      { path: "student/form", component: AdminStudentFormView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
