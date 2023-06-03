import useLang from "./useLang";
import { computed } from "vue";
import { IMenuItem } from "../interface/base";

const useMenu = () => {
  const langs = useLang();

  const mainMenu = computed<IMenuItem[]>(() => [
    {
      id: "course",
      title: langs.value?.menu.courses.title,
      link: "#",
      type: "main",
      typeSubs: "mega",
      subs: [
        {
          id: "bootcamp",
          title: langs.value?.menu.courses.subs.category_bootCamp.title,
          subs: [
            {
              id: "fe",
              title: langs.value?.menu.courses.subs.category_bootCamp.fe,
              link: "/course/bootcamp/fe",
            },
            {
              id: "be",
              title: langs.value?.menu.courses.subs.category_bootCamp.be,
              link: "/course/bootcamp/be",
            },
            {
              id: "fs",
              title: langs.value?.menu.courses.subs.category_bootCamp.fs,
              link: "/course/bootcamp/fs",
            },
            {
              id: "mobile",
              title: langs.value?.menu.courses.subs.category_bootCamp.mobile,
              link: "/course/bootcamp/mobile",
            },
            {
              id: "java",
              title: langs.value?.menu.courses.subs.category_bootCamp.java,
              link: "/course/bootcamp/java",
            },
            {
              id: "cSharp",
              title: langs.value?.menu.courses.subs.category_bootCamp.cSharp,
              link: "/course/bootcamp/cSharp",
            },
          ],
        },
        {
          id: "bgBackEnd",
          title: langs.value?.menu.courses.subs.category_background.title,
          subs: [
            {
              id: "java",
              title: langs.value?.menu.courses.subs.category_background.java,
              link: "/course/backend/java",
            },
            {
              id: "cSharp",
              title: langs.value?.menu.courses.subs.category_background.cSharp,
              link: "/course/backend/cSharp",
            },
            {
              id: "python",
              title: langs.value?.menu.courses.subs.category_background.python,
              link: "/course/backend/python",
            },
            {
              id: "data",
              title: langs.value?.menu.courses.subs.category_background.data,
              link: "/course/backend/data",
            },
          ],
        },
        {
          id: "mobile",
          title: langs.value?.menu.courses.subs.category_mobile.title,
          subs: [
            {
              id: "android",
              title: langs.value?.menu.courses.subs.category_mobile.android,
              link: "/course/mobile/android",
            },
            {
              id: "ios",
              title: langs.value?.menu.courses.subs.category_mobile.ios,
              link: "/course/mobile/ios",
            },
            {
              id: "reactNative",
              title: langs.value?.menu.courses.subs.category_mobile.reactNative,
              link: "/course/mobile/reactNative",
            },
            {
              id: "flutter",
              title: langs.value?.menu.courses.subs.category_mobile.flutter,
              link: "/course/mobile/flutter",
            },
          ],
        },
      ],
    },
    {
      id: "student",
      title: langs.value?.menu.student.title,
      link: "#",
      type: "main",
      typeSubs: "default",
      subs: [
        {
          id: "stories",
          title: langs.value?.menu.student.subs.stories,
          link: "/student/stories",
        },
        {
          id: "photo",
          title: langs.value?.menu.student.subs.photo,
          link: "/student/photo",
        },
        {
          id: "notable",
          title: langs.value?.menu.student.subs.student,
          link: "/student/notable",
        },
      ],
    },
    {
      id: "commitment",
      title: langs.value?.menu.commitment.title,
      link: "/commitment",
      type: "main",
      typeSubs: "none",
      subs: [],
    },
    {
      id: "about",
      title: langs.value?.menu.about.title,
      link: "#",
      type: "main",
      typeSubs: "default",
      subs: [
        {
          id: "introduction",
          title: langs.value?.menu.about.subs.intro,
          link: "/about/intro",
        },
        {
          id: "contact",
          title: langs.value?.menu.about.subs.contact,
          link: "/about/contact",
        },
        {
          id: "disclaimer",
          title: langs.value?.menu.about.subs.disclaimer,
          link: "/about/disclaimer",
        },
      ],
    },
    {
      id: "business",
      title: langs.value?.menu.business.title,
      link: "/business",
      type: "support",
      typeSubs: "none",
    },
    {
      id: "blog",
      title: langs.value?.menu.blog.title,
      link: "/blog",
      type: "support",
      typeSubs: "none",
    },
  ]);

  return { mainMenu };
};

export default useMenu;
