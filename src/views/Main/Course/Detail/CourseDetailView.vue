<script lang="ts" setup>
import { defineComponent, computed, ref } from "vue";
import { ILinkItem } from "@/common/interface/base";
import Section from "@/components/Section/Section.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import LinkItem from "@/components/NavLink/LinkItem.vue";
import LinkContent from "@/components/NavLink/LinkContent.vue";
import CourseDetailIntro from "./CourseDetailIntro.vue";
import CourseDetailTopic from "./CourseDetailTopic.vue";
import CourseDetailInfo from "./CourseDetailInfo.vue";
import CourseDetailSubject from "./CourseDetailSubject.vue";
import CourseDetailGoals from "./CourseDetailGoals.vue";
import CourseDetailOutput from "./CourseDetailOutput.vue";
import CourseDetailLesson from "./CourseDetailLesson.vue";
import CourseDetailProject from "./CourseDetailProject.vue";
import CourseDetailBenefit from "./CourseDetailBenefit.vue";
import CourseDetailMethod from "./CourseDetailMethod.vue";
import CourseDetailDegrees from "./CourseDetailDegrees.vue";
import CourseDetailPhoto from "./CourseDetailPhoto.vue";
import CourseDetailSchedule from "./CourseDetailSchedule.vue";
import useLang from "@/common/hooks/useLang";
import useNavLink from "@/common/hooks/useNavLink";
import RateModal from "@/components/Rate/RateModal.vue";

defineComponent({ name: "CourseDetailView" });

useNavLink();

const { langs, type } = useLang();

const isRate = ref<boolean>(false);

const links = computed<ILinkItem[]>(() => [
  { id: "info", title: langs.value?.course.detail.sideNav.info },
  { id: "join", title: langs.value?.course.detail.sideNav.subject },
  { id: "goals", title: langs.value?.course.detail.sideNav.goals },
  { id: "output", title: langs.value?.course.detail.sideNav.output },
  { id: "lesson", title: langs.value?.course.detail.sideNav.lesson },
  { id: "project", title: langs.value?.course.detail.sideNav.project },
  { id: "benefit", title: langs.value?.course.detail.sideNav.benefit },
  { id: "method", title: langs.value?.course.detail.sideNav.method },
  { id: "degrees", title: langs.value?.course.detail.sideNav.degrees },
  { id: "photo", title: langs.value?.course.detail.sideNav.photo },
  { id: "schedule", title: langs.value?.course.detail.sideNav.schedule },
]);

const onRate = () => (isRate.value = true);

const onCancel = () => (isRate.value = false);
</script>

<template>
  <div class="course-detail">
    <LinkContent>
      <CourseDetailIntro :langs="langs" @onRate="onRate" />
    </LinkContent>

    <LinkContent>
      <CourseDetailTopic :langs="langs" />
    </LinkContent>

    <Section>
      <Row align="start" justify="spaceBetween">
        <Col :xs="0" :md="0" :lg="0" :span="4" wrapClass="detail-col">
          <div class="col-side-nav">
            <LinkItem
              v-for="link in links"
              :key="link.id"
              :link="link"
              wrapClass="nav-link"
            />
          </div>
        </Col>

        <Col :xs="24" :md="24" :lg="24" :span="20">
          <LinkContent id="info">
            <CourseDetailInfo :langs="langs" />
          </LinkContent>

          <LinkContent id="join">
            <CourseDetailSubject :langs="langs" />
          </LinkContent>

          <LinkContent id="goals">
            <CourseDetailGoals :langs="langs" />
          </LinkContent>

          <LinkContent id="output">
            <CourseDetailOutput :langs="langs" />
          </LinkContent>

          <LinkContent
            wrapClass="background"
            :style="{
              backgroundImage: `url(${require('../../../../assets/images/banner/banner_6.jpg')})`,
            }"
          />

          <LinkContent id="lesson">
            <CourseDetailLesson :langs="langs" />
          </LinkContent>

          <LinkContent
            wrapClass="background"
            :style="{
              backgroundImage: `url(${require('../../../../assets/images/gallery/gallery_8.jpg')})`,
            }"
          />

          <LinkContent id="project">
            <CourseDetailProject :langs="langs" />
          </LinkContent>

          <LinkContent id="benefit">
            <CourseDetailBenefit :langs="langs" />
          </LinkContent>

          <LinkContent id="method">
            <CourseDetailMethod :langs="langs" />
          </LinkContent>

          <LinkContent id="degrees">
            <CourseDetailDegrees :langs="langs" />
          </LinkContent>

          <LinkContent id="photo">
            <CourseDetailPhoto :langs="langs" />
          </LinkContent>

          <LinkContent id="schedule">
            <CourseDetailSchedule :langs="langs" :type="type" />
          </LinkContent>
        </Col>
      </Row>
    </Section>
  </div>

  <RateModal :open="isRate" @onCancel="onCancel" />
</template>
