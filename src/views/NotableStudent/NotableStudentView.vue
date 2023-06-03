<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import { IStudentCard } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Title from "@/components/Typography/Title.vue";
import StudentCard from "@/components/Common/StudentCard.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Button from "@/components/Button/Button.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NotableStudentView" });

const langs = useLang();

const students = computed<IStudentCard[]>(() => [
  {
    id: "1",
    name: "Nguyễn Đặng Khánh Vân",
    imageUrl: require('../../assets/images/common/avatar.jpg'),
    course: "BC-Full Stack",
    workAt: "Citek",
    position: "BE Intern",
  },
  {
    id: "2",
    name: "Phạm Huy Hoàng",
    imageUrl: require('../../assets/images/common/avatar.jpg'),
    course: "BC-Full Stack",
    workAt: "Unicloud",
    position: "ReactJs & Flutter",
  },
  {
    id: "3",
    name: "Nguyễn Quốc Ngữ",
    imageUrl: require('../../assets/images/common/avatar.jpg'),
    course: "BC-Full Stack",
    workAt: "Gumiviet",
    position: "Junior Developer",
  },
  {
    id: "4",
    name: "Phan Ánh Ngọc",
    imageUrl: require('../../assets/images/common/avatar.jpg'),
    course: "BC-Full Stack",
    workAt: "Parcel Perform",
    position: "Developer Intern",
  },
  {
    id: "5",
    name: "Nguyễn Tấn Lợi",
    imageUrl: require('../../assets/images/common/avatar.jpg'),
    course: "BC-Front End",
    workAt: "Hitach",
    position: "FE Developer",
  },
  {
    id: "6",
    name: "Bùi Vĩnh Khải",
    imageUrl: require('../../assets/images/common/avatar.jpg'),
    course: "BC-Front End",
    workAt: "Madison Technology",
    position: "FE Developer",
  },
]);
</script>

<template>
  <Section wrapClass="notable-student">
    <Title :level="3" align="center">
      {{ langs?.home.student.title }}
    </Title>
    <Row>
      <Col
        v-for="student in students"
        :key="student.id"
        :xs="24"
        :md="24"
        :lg="12"
        :span="8"
      >
        <StudentCard :langs="langs" :student="student" />
      </Col>
    </Row>

    <Row justify="center" wrapClass="notable-student-action">
      <Col>
        <Button variant="primary" size="lg" wrapClass="action-btn">
          {{ langs?.common.actions.seeMore }}
        </Button>
      </Col>
    </Row>
  </Section>
</template>
