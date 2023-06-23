<script lang="ts" setup>
import { computed, defineComponent, defineProps, defineEmits } from "vue";
import { Langs } from "@/common/lang";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Image from "@/components/Image/Image.vue";
import Blob from "@/components/Blob/Blob.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";
import Badge from "@/components/Badge/Badge.vue";
import RateStar from "@/components/Rate/RateStar.vue";
import Button from "@/components/Button/Button.vue";
import Card from "@/components/Card/Card.vue";
import IconCalendar from "@/components/Icons/IconCalendar.vue";
import IconClock from "@/components/Icons/IconClock.vue";

defineComponent({ name: "CourseDetailIntro" });

interface CourseDetailIntroProps {
  langs: Langs;
}

defineProps<CourseDetailIntroProps>();

const emits = defineEmits(["onRate"])

const tags = computed(() => [
  { id: "html", title: "HTML" },
  { id: "css", title: "CSS" },
  { id: "html5", title: "HTML5" },
  { id: "css3", title: "CSS3" },
  { id: "js", title: "Javascript" },
  { id: "ajax", title: "Ajax" },
  { id: "json", title: "JSON" },
  { id: "es6", title: "ES6 Js" },
  { id: "api", title: "Restful API" },
  { id: "react", title: "ReactJS" },
  { id: "angular", title: "Angular" },
  { id: "vue", title: "Vue" },
  { id: "mindset", title: "Tư duy lập trình" },
  { id: "oop", title: "Lập trình hướng đối tượng" },
  { id: "cv", title: "Hướng dẫn CV" },
  { id: "interview", title: "Hướng dẫn PV" },
  { id: "connect", title: "Kết nối doanh nghiệp" },
  { id: "support", title: "Hỗ trợ việc làm" },
]);

const onRate = () => emits("onRate")
</script>

<template>
  <Section wrapClass="detail-intro">
    <Row align="start">
      <!-- Intro left -->
      <Col :xs="24" :md="24" :span="14">
        <Title :level="3">
          BOOTCAMP - LẬP TRÌNH FRONT-END WEBSITE TỪ ZERO ĐẾN CÓ VIỆC
        </Title>

        <Paragraph align="justify">
          Đừng để cho những giấc mơ, đam mê, mong muốn xây dựng sự nghiệp cho
          chính cuộc đời của mình lại nằm trong tay của người khác qua những câu
          hỏi người này nhóm nọ là CÓ NÊN HỌC LẬP TRÌNH ? Lập trình là xu thế
          tất yếu, bạn hãy bắt tay vào ngay, bạn có thể chuyển ngành, gia tăng
          thu nhập nhờ freelancer hoặc ít nhất sẽ là skill rất cần cho công việc
          của bạn ở tương lai gần. Mới học lập trình bạn sẽ rất lan man, thiếu
          định hướng và đôi khi nản do mình không được hỗ trợ kịp thời. Thời
          gian và tuổi trẻ của bạn rất đáng giá, bạn cần một lộ trình bài bản
          thực tế để bạn nhanh chóng thay đổi sự nghiệp. CyberSoft thấu hiểu
          điều này và đã có hơn 9500+ bạn đăng kí học và có việc làm thông qua
          chương trình đào tạo Bootcamp Lập trình Front-End chuyên nghiệp từ
          Zero tại CyberSoft. Khóa học 100% thực hành cường độ cao theo dự án
          thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay trọn đời sau khi
          học. CyberSoft sẽ đồng hành cùng bạn cho đến khi bạn có việc làm ổn
          định từ 8-16tr/tháng. Phương pháp đào tạo nghề chuẩn đại học Arizona -
          ASU Mỹ - tập trung tư duy, phân tích bài toán giúp cho học viên dễ
          dàng phát triển từ dev lên senior, leader và làm việc tại bất kì môi
          trường nào.
        </Paragraph>

        <Row align="start" :gutters="[10]">
          <Col :xs="24" :span="12">
            <List :title="langs?.course.detail.intro.list_1.title">
              <ListItem>
                {{ langs?.course.detail.intro.list_1.item_1 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_1.item_2 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_1.item_3 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_1.item_4 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_1.item_5 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_1.item_6 }}
              </ListItem>
            </List>
          </Col>
          <Col :xs="24" :span="12">
            <List :title="langs?.course.detail.intro.list_2.title">
              <ListItem>
                {{ langs?.course.detail.intro.list_2.item_1 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_2.item_2 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_2.item_3 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_2.item_4 }}
              </ListItem>
              <ListItem>
                {{ langs?.course.detail.intro.list_2.item_5 }}
              </ListItem>
            </List>
          </Col>
        </Row>
      </Col>
      <!-- Intro right -->
      <Col :xs="24" :md="24" :span="10">
        <!-- Image -->
        <div class="intro-image">
          <Image
            fit="cover"
            wrapClass="image-view"
            :src="require('../../../../assets/images/banner/banner_1.jpg')"
          />
          <Blob
            :size="400"
            wrapClass="image-blob"
            color="orange"
            position="absolute"
            top="50%"
            left="50%"
            :zIndex="-2"
          />
        </div>

        <!-- Tags -->
        <Row wrapClass="intro-tags" :gutters="[4]">
          <Col v-for="tag in tags" :key="tag.id">
            <Badge>
              {{ tag.title }}
            </Badge>
          </Col>
        </Row>

        <!-- Rate -->
        <Row wrapClass="intro-rate" justify="center">
          <Col>
            <RateStar />
          </Col>
          <Col>
            <Button variant="primary" @onClick="onRate">
              {{ langs?.common.actions.rate }}
            </Button>
          </Col>
        </Row>

        <!-- Times -->
        <Card wrapClass="intro-card-time">
          <template #body>
            <Row>
              <Col :span="12">
                <Row justify="center" align="center" wrapClass="time-item">
                  <Col>
                    <IconCalendar />
                  </Col>
                  <Col>
                    <Paragraph> 6 {{ langs?.common.units.months }} </Paragraph>
                  </Col>
                </Row>
              </Col>

              <Col :span="12">
                <Row justify="center" align="center" wrapClass="time-item">
                  <Col>
                    <IconClock />
                  </Col>
                  <Col>
                    <Paragraph>
                      72 {{ langs?.common.units.sessions }}
                    </Paragraph>
                  </Col>
                </Row>
              </Col>
            </Row>
          </template>
        </Card>

        <!-- Action -->
        <Row>
          <Col :span="12">
            <Button wrapClass="intro-action" size="lg" variant="primary">
              {{ langs?.common.actions.register }}
            </Button>
          </Col>

          <Col :span="12">
            <router-link to="/about/contact">
              <Button
                ghost
                wrapClass="intro-action"
                size="lg"
                variant="primary"
              >
                {{ langs?.common.actions.advise }}
              </Button>
            </router-link>
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
</template>
