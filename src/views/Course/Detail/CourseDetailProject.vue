<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import { ITabs } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import CourseDetailProjectItem from "./CourseDetailProjectItem.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailProject" });

interface CourseDetailProjectProps {
  langs: Langs;
}

defineProps<CourseDetailProjectProps>();

useReveal('projectInner')

const tabs = computed<ITabs[]>(() => [
  { id: "1", title: "AirBnB", componentName: "air" },
  { id: "2", title: "Jira", componentName: "jira" },
  { id: "3", title: "Fiverr", componentName: "fiverr" },
  { id: "4", title: "E-learning", componentName: "elearning" },
]);

const projects = computed(() => [
  {
    id: "air",
    title: "AirBnB",
    mainTech: "React",
    content:
      "Tạo một hệ thống như AirBnB, giúp connect Người cho thuê và Người thuê địa điểm, cũng như là tạo cơ hội cho các Freelance Photographer chụp hình nhà, địa điểm, và phong cảnh xung quanh",
    tags: [
      { id: "html", title: "HTML" },
      { id: "css", title: "CSS" },
      { id: "js", title: "Javascript" },
      { id: "ajax", title: "Ajax" },
      { id: "json", title: "JSON" },
      { id: "es6", title: "ES6 Js" },
      { id: "react", title: "React JS" },
    ],
    tasks: [
      {
        id: "1",
        title: "Xây dựng giao diện người dùng và quản trị với ReactJS",
        items: [
          { id: "1", title: "Giao diện cho trang Home" },
          { id: "2", title: "Giao diện cho trang Đăng kí/Đăng nhập" },
          {
            id: "3",
            title: "Giao diện Danh sách phòng, Chi tiết phòng, Bình luận",
          },
          { id: "4", title: "Giao diện Đặt phòng" },
          {
            id: "5",
            title: "Giao diện cho trang Thông tin cá nhân, Lịch sử đặt phòng",
          },
          {
            id: "6",
            title: "Xây dựng giao diện Admin Dashboard để quản lí hệ thống",
          },
          { id: "7", title: "Giao diện quản lí Địa điểm, phòng, đặt phòng" },
          { id: "8", title: "Giao diện quản lí User" },
          { id: "9", title: "Host web trên Heroku, Vercel" },
        ],
      },
      {
        id: "2",
        title: "Thao tác với API để truyền và nhận dữ liệu từ Backend",
        items: [
          { id: "1", title: "Thực hiện chức năng cho lấy và tìm kiếm phòng" },
          {
            id: "2",
            title: "Đăng nhập/Đăng kí cho người dùng, và phân loại người dùng",
          },
          {
            id: "3",
            title: "Xác thực form đăng kí/đăng nhập trước khi thao tác với API",
          },
          {
            id: "4",
            title:
              "Thực hiện chức năng Sửa thông tin cá nhân, xem lịch sử đặt phòng",
          },
          {
            id: "5",
            title: "Thực hiện chức năng Đặt phòng",
          },
          {
            id: "6",
            title:
              "Thực hiện các chức năng trong CRUD cho quản lý phòng, địa điểm",
          },
          {
            id: "7",
            title: "Thực hiện các chức năng trong CRUD cho quản lý người dùng",
          },
          {
            id: "8",
            title: "Thực hiện các chức năng trong CRUD cho quản lý đặt phòng",
          },
        ],
      },
      {
        id: "3",
        title: "Đạt được các kỹ năng mềm quan trọng",
        items: [
          { id: "1", title: "Kỹ năng làm việc nhóm" },
          { id: "2", title: "Quản lý task và thời gian" },
          {
            id: "3",
            title: "Quản lý source code bằng github",
          },
          { id: "4", title: "Trình bày đồ án" },
          {
            id: "5",
            title: "Kỹ năng viết CV và phỏng vấn",
          },
        ],
      },
    ],
  },
  {
    id: "jira",
    title: "Jira",
    mainTech: "React",
    content:
      "Tạo ứng dụng như Jira, nhằm quản lý dự án và flow công việc một cách hệ thống. Jira tập trung vào việc hỗ trợ quản lí theo quy trình Scrum và Agile, gồm các công cụ quản lí task như Kanban, tạo Backlog, …",
    tags: [
      { id: "html", title: "HTML" },
      { id: "css", title: "CSS" },
      { id: "js", title: "Javascript" },
      { id: "ajax", title: "Ajax" },
      { id: "json", title: "JSON" },
      { id: "es6", title: "ES6 Js" },
      { id: "react", title: "React JS" },
    ],
    tasks: [
      {
        id: "1",
        title: "Xây dựng giao diện người dùng và quản trị với ReactJS",
        items: [
          {
            id: "1",
            title: "Giao diện cho trang Dashboard hiển thị các dự án",
          },
          { id: "2", title: "Giao diện cho trang Đăng kí/Đăng nhập" },
          {
            id: "3",
            title: "Giao diện quản lý task: tạo task, giao task, xoá task",
          },
          {
            id: "4",
            title: "Giao diện xem thông tin chi tiết task, xem bình luận",
          },
          {
            id: "5",
            title:
              "Giao diện chỉnh sửa task (trạng thái, deadline, mô tả…), chỉnh sửa bình luận",
          },
          {
            id: "6",
            title: "Giao diện quản lý người dùng",
          },
          { id: "7", title: "Host web trên Heroku, Vercel" },
        ],
      },
      {
        id: "2",
        title: "Thao tác với API để truyền và nhận dữ liệu từ Backend",
        items: [
          { id: "1", title: "Thực hiện chức năng cho lọc và tìm kiếm task" },
          {
            id: "2",
            title: "Xác thực form đăng kí/đăng nhập trước khi thao tác với API",
          },
          {
            id: "3",
            title:
              "Thực hiện chức năng Đăng kí/Đăng nhập cho người dùng, và phân loại người dùng",
          },
          {
            id: "4",
            title: "Thực hiện chức năng Sửa thông tin cá nhân",
          },
          {
            id: "5",
            title: "Thực hiện các chức năng trong CRUD cho quản lý task",
          },
          {
            id: "6",
            title: "Thực hiện các chức năng trong CRUD cho quản lý người dùng",
          },
          {
            id: "7",
            title: "Thực hiện các chức năng trong CRUD cho quản lý dự án",
          },
        ],
      },
      {
        id: "3",
        title: "Đạt được các kỹ năng mềm quan trọng",
        items: [
          { id: "1", title: "Kỹ năng làm việc nhóm" },
          { id: "2", title: "Quản lý task và thời gian" },
          {
            id: "3",
            title: "Quản lý source code bằng github",
          },
          { id: "4", title: "Trình bày đồ án" },
          {
            id: "5",
            title: "Kỹ năng viết CV và phỏng vấn",
          },
        ],
      },
    ],
  },
  {
    id: "fiverr",
    title: "Fiverr",
    mainTech: "React",
    content:
      "Tạo ứng dụng như Fiverr, một nền tảng cho các freelancers có thể trao đổi và cung cấp dịch vụ của mình cho khách hàng trên toàn quốc",
    tags: [
      { id: "html", title: "HTML" },
      { id: "css", title: "CSS" },
      { id: "js", title: "Javascript" },
      { id: "ajax", title: "Ajax" },
      { id: "json", title: "JSON" },
      { id: "es6", title: "ES6 Js" },
      { id: "react", title: "React JS" },
    ],
    tasks: [
      {
        id: "1",
        title: "Xây dựng giao diện người dùng và quản trị với ReactJS",
        items: [
          {
            id: "1",
            title: "Giao diện cho trang Home",
          },
          { id: "2", title: "Giao diện cho trang Đăng kí/Đăng nhập" },
          {
            id: "3",
            title: "Giao diện cho trang Đăng kí/Đăng nhập",
          },
          {
            id: "4",
            title: "Giao diện Danh sách các công việc",
          },
          {
            id: "5",
            title: "Giao diện Danh mục việc làm",
          },
          {
            id: "6",
            title: "Giao diện Thuê nhân sự",
          },
          { id: "7", title: "Giao diện cho trang Thông tin chi tiết nhân sự" },
          { id: "8", title: "Giao diện trang Thông tin cá nhân" },
          {
            id: "9",
            title: "Xây dựng giao diện Admin Dashboard để quản lí hệ thống",
          },
          { id: "10", title: "Giao diện quản lí User" },
          { id: "11", title: "Host web trên Heroku, Vercel" },
        ],
      },
      {
        id: "2",
        title: "Thao tác với API để truyền và nhận dữ liệu từ Backend",
        items: [
          {
            id: "1",
            title:
              "Thực hiện chức năng cho lấy và tìm kiếm công việc, loại công việc",
          },
          {
            id: "2",
            title: "Đăng nhập/Đăng kí cho người dùng, và phân loại người dùng",
          },
          {
            id: "3",
            title: "Xác thực form đăng kí/đăng nhập trước khi thao tác với API",
          },
          {
            id: "4",
            title: "Thực hiện chức năng Sửa thông tin cá nhân",
          },
          {
            id: "5",
            title: "Thực hiện chức năng Thuê nhân sự",
          },
          {
            id: "6",
            title:
              "Thực hiện các chức năng trong CRUD cho quản lý công việc, loại công việc",
          },
          {
            id: "7",
            title: "Thực hiện các chức năng trong CRUD cho quản lý người dùng",
          },
        ],
      },
      {
        id: "3",
        title: "Đạt được các kỹ năng mềm quan trọng",
        items: [
          { id: "1", title: "Kỹ năng làm việc nhóm" },
          { id: "2", title: "Quản lý task và thời gian" },
          {
            id: "3",
            title: "Quản lý source code bằng github",
          },
          { id: "4", title: "Trình bày đồ án" },
          {
            id: "5",
            title: "Kỹ năng viết CV và phỏng vấn",
          },
        ],
      },
    ],
  },
  {
    id: "elearning",
    title: "E-Learning",
    mainTech: "React",
    content:
      "Tạo một hệ thống E-Learning khoá học trực tuyến, quản lý các khoá học và học viên đang theo học",
    tags: [
      { id: "html", title: "HTML" },
      { id: "css", title: "CSS" },
      { id: "js", title: "Javascript" },
      { id: "ajax", title: "Ajax" },
      { id: "json", title: "JSON" },
      { id: "es6", title: "ES6 Js" },
      { id: "react", title: "React JS" },
    ],
    tasks: [
      {
        id: "1",
        title: "Xây dựng giao diện người dùng và quản trị với ReactJS",
        items: [
          {
            id: "1",
            title:
              " Đăng nhập/Đăng kí cho người dùng, và phân chia loại người dùng",
          },
          { id: "2", title: "Giao diện cho trang Home" },
          {
            id: "3",
            title: "Giao diện cho trang Đăng kí/Đăng nhập",
          },
          {
            id: "4",
            title: "Giao diện cho trang Course Detail",
          },
          {
            id: "5",
            title: "Giao diện cho trang User Info",
          },
          {
            id: "6",
            title: "Xây dựng giao diện Admin Dashboard để quản lí hệ thống",
          },
          { id: "7", title: "Giao diện quản lí Course" },
          { id: "8", title: "Giao diện quản lí User" },
          {
            id: "9",
            title: "Giao diện quản lí Course Registration",
          },
          { id: "10", title: "Host web trên Heroku, Vercel" },
        ],
      },
      {
        id: "2",
        title: "Thao tác với API để truyền và nhận dữ liệu từ Backend",
        items: [
          {
            id: "1",
            title: "Thực hiện chức năng cho lấy và tìm kiếm khóa học",
          },
          {
            id: "2",
            title: "Xác thực form đăng kí/đăng nhập trước khi thao tác với API",
          },
          {
            id: "3",
            title: "Thực hiện chức năng Đăng kí/Đăng nhập",
          },
          {
            id: "4",
            title: "Thực hiện chức năng Sửa thông tin cá nhân",
          },
          {
            id: "5",
            title: "Thực hiện chức năng đăng ký và hủy đăng ký khóa học",
          },
          {
            id: "6",
            title: "Thực hiện các chức năng trong CRUD cho quản lý khóa học",
          },
          {
            id: "7",
            title: "Thực hiện các chức năng trong CRUD cho quản lý người dùng",
          },
          {
            id: "8",
            title:
              "Thống kê cơ bản các dữ liệu và hiện dưới dạng pie chart, bar chart",
          },
        ],
      },
      {
        id: "3",
        title: "Đạt được các kỹ năng mềm quan trọng",
        items: [
          { id: "1", title: "Kỹ năng làm việc nhóm" },
          { id: "2", title: "Quản lý task và thời gian" },
          {
            id: "3",
            title: "Quản lý source code bằng github",
          },
          { id: "4", title: "Trình bày đồ án" },
          {
            id: "5",
            title: "Kỹ năng viết CV và phỏng vấn",
          },
        ],
      },
    ],
  },
]);
</script>

<template>
  <Section id="projectInner" wrapClass="detail-project">
    <Title :level="3" transform="uppercase">
      {{ langs?.course.detail.sideNav.project }}
    </Title>
    <Paragraph>
      Các dự án cuối khóa được dựng lên để nâng cao tư duy phân chia layout, khả
      năng thiết kế flow UI/UX, cách giàn cắt layout và Responsive với các thư
      viện UI nổi tiếng, thành thạo SCSS, và tạo animation từ đơn giản tới phức
      tạp
    </Paragraph>

    <Tabs :items="tabs">
      <template #tabs-content="com">
        <CourseDetailProjectItem
          v-if="com.tab === 'air'"
          :langs="langs"
          :project="projects[0]"
        />
        <CourseDetailProjectItem
          v-if="com.tab === 'jira'"
          :langs="langs"
          :project="projects[1]"
        />
        <CourseDetailProjectItem
          v-if="com.tab === 'fiverr'"
          :langs="langs"
          :project="projects[2]"
        />
        <CourseDetailProjectItem
          v-if="com.tab === 'elearning'"
          :langs="langs"
          :project="projects[3]"
        />
      </template>
    </Tabs>
  </Section>
</template>
