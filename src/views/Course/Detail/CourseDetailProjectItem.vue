<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import { Langs } from "@/common/lang";
import Card from "@/components/Card/Card.vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Badge from "@/components/Badge/Badge.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Divider from "@/components/Divider/Divider.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";

defineComponent({ name: "CourseDetailProjectItem" });

interface CourseDetailProjectItemProps {
  langs: Langs;
  project: any;
}

defineProps<CourseDetailProjectItemProps>();
</script>

<template>
  <Card wrapClass="project-inner" bodyClass="inner-body">
    <template #body>
      <Title :level="6">
        <Row>
          <Col>
            {{ project.title }}
          </Col>
          <Col>|</Col>
          <Col>
            {{ project.mainTech }}
          </Col>
        </Row>
      </Title>

      <Paragraph>
        {{ project.content }}
      </Paragraph>

      <Paragraph>
        <Row>
          <Col>
            {{ langs?.course.detail.project.techs }}
          </Col>
          <Col>
            <Row :gutters="[4]">
              <Col v-for="tag in project.tags" :key="tag.id">
                <Badge variants="info">
                  {{ tag.title }}
                </Badge>
              </Col>
            </Row>
          </Col>
        </Row>
      </Paragraph>

      <Divider contentPlacement="left">
        <template #content>
          {{ langs?.course.detail.project.subTitle }}
        </template>
      </Divider>

      <div class="inner-task">
        <Card
          v-for="task in project.tasks"
          :key="task.id"
          wrapClass="task-card"
          headerClass="task-card-header"
          bodyClass="task-card-body"
        >
          <template #header>
            {{ task.title }}
          </template>
          <template #body>
            <List>
              <ListItem v-for="item in task.items" :key="item.id">
                {{ item.title }}
              </ListItem>
            </List>
          </template>
        </Card>
      </div>
    </template>
  </Card>
</template>
