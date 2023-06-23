<script lang="ts" setup>
import { defineComponent } from "vue";
import Row from "@/components/Grid/Row.vue";
import Col from "@/components/Grid/Col.vue";
import Title from "@/components/Typography/Title.vue";
import Paragraph from "@/components/Typography/Paragraph.vue";
import Card from "@/components/Card/Card.vue";
import Divider from "@/components/Divider/Divider.vue";
import Image from "@/components/Image/Image.vue";
import Comment from "@/components/Comment/Comment.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "BlogDetailView" });

const { langs } = useLang();
</script>

<template>
  <div class="blog-detail">
    <Card bodyClass="detail-body">
      <template #header>
        <Title :level="3"> Blog title </Title>
      </template>
      <template #body>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          nesciunt quaerat repudiandae natus tempora distinctio dignissimos
          doloremque hic eligendi sint omnis quas quis blanditiis tenetur, non
          quidem saepe quam eum est necessitatibus iusto eius? Officia quisquam
          nam ullam laudantium esse voluptate, sed, velit atque quas vitae ex
          molestiae, ducimus eveniet necessitatibus. Earum porro minus itaque
          quisquam cum tenetur deleniti expedita rerum magni nesciunt cupiditate
          eaque veniam molestiae, beatae sequi tempore assumenda deserunt
          cumque, facilis temporibus dolorum perferendis dolore enim. Vero,
          aliquam sapiente sunt, facere iure totam ducimus expedita laudantium
          facilis illum eaque dolorem voluptatum quidem saepe, quod accusamus
          nesciunt porro fugiat beatae eius incidunt inventore numquam culpa?
          Fuga esse at non vitae vero ipsa libero aperiam pariatur recusandae
          beatae voluptatibus similique, ab in cum, laboriosam, praesentium
          labore. Illum natus quos corrupti, eos optio provident magni ipsum,
          delectus, odio ullam quis amet expedita tenetur sunt? Accusamus aut
          rerum, expedita consectetur aspernatur incidunt. Reprehenderit
          repudiandae, natus recusandae excepturi, beatae amet quas ad illum,
          maxime unde aspernatur suscipit pariatur explicabo a nulla! Pariatur
          cumque recusandae a. Doloribus nobis suscipit autem debitis totam
          iure. Odit consequuntur ea perspiciatis ipsa mollitia, dolorem error
          tempore cumque asperiores neque magnam magni dignissimos saepe soluta
          quam perferendis fugiat.
        </Paragraph>

        <Title :level="6">
          {{ langs?.blog.detail.subTitle }}
        </Title>

        <Divider />

        <Row>
          <Col v-for="(item, idx) in 3" :key="idx" :xs="24" :md="24" :span="8">
            <Card bodyClass="detail-relative-item">
              <template #body>
                <div class="item-image">
                  <Image
                    fit="cover"
                    :src="
                      require('../../../../assets/images/gallery/gallery_11.jpg')
                    "
                  />
                </div>
                <Title :level="6" wrapClass="item-title"> Blog title </Title>
              </template>
            </Card>
          </Col>
        </Row>

        <Divider />

        <Comment />
      </template>
    </Card>
  </div>
</template>
