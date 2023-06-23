<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";
import Image from "@/components/Image/Image.vue";
import useReveal from "@/common/hooks/useReveal";

defineComponent({ name: "CourseDetailOutput" });

useReveal("outputInner");

interface CourseDetailOutputProps {
  langs: Langs;
}

defineProps<CourseDetailOutputProps>();
</script>

<template>
  <div class="detail-output">
    <Section id="outputInner">
      <Title :level="3" transform="uppercase">
        {{ langs?.course.detail.sideNav.output }}
      </Title>
      <Row align="start">
        <Col :xs="24" :md="24" :span="15">
          <List>
            <ListItem>
              Bạn sẽ đạt được kỹ năng của một lập trình Front-End chuyên nghiệp
            </ListItem>
            <ListItem>
              Xây dựng và triển khai được các dự án thực tế về React JS, tương
              tác Backend, Servies, Web API, JSON
            </ListItem>
            <ListItem>
              Vừa chuyên nghiệp hóa chuyên môn, vừa thông thạo các kĩ năng mềm
              trong làm việc
            </ListItem>
            <ListItem>
              Được rèn luyện tư duy, logic nền tảng, cốt lõi trong nghề lập
              trình
            </ListItem>
            <ListItem>
              Được truyền kinh nghiệm "máu lửa" từ các Giảng viên chuyên nghiệp
              qua các dự án được lấy từ doanh nghiệp
            </ListItem>
            <ListItem>
              Cấp chứng nhận hoàn thành khóa học sau khi hoàn thành các yều cầu
              của khóa học
            </ListItem>
            <ListItem>
              Kết nối việc làm đến các doanh nghiệp đang tuyển dụng
            </ListItem>
            <ListItem>
              Hỗ trợ tìm việc trọn đời qua hệ thống tìm việc
            </ListItem>
          </List>
        </Col>

        <Col :xs="0" :md="0" :span="9">
          <div class="output-image">
            <Image
              fit="cover"
              wrapClass="image-view"
              :src="require('../../../../assets/images/gallery/gallery_16.jpg')"
            />
          </div>
        </Col>
      </Row>
    </Section>
  </div>
</template>
