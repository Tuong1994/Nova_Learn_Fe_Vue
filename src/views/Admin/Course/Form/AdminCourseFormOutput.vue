<script lang="ts" setup>
import { defineComponent, defineProps } from 'vue';
import { Langs } from '@/common/lang';
import Card from '@/components/Card/Card.vue';
import Title from '@/components/Typography/Title.vue';
import Row from '@/components/Grid/Row.vue';
import Col from '@/components/Grid/Col.vue';
import NoteMessage from '@/components/NoteMessage/NoteMessage.vue';

defineComponent({name: "AdminCourseFormOutput"})

interface AdminCourseFormOutputProps {
    langs: Langs
}

defineProps<AdminCourseFormOutputProps>()
</script>

<template>
    <Card>
        <template #header></template>
    </Card>
</template>