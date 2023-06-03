<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, ref, watch } from "vue";
import { ACCEPT_IMAGE_TYPE } from "@/common/constant/base";
import IconPlus from "../Icons/IconPlus.vue";
import Image from "../Image/Image.vue";
import NoteMessage from "../NoteMessage/NoteMessage.vue";
import useLang from "@/common/hooks/useLang";

defineComponent({ name: "NVLSingleUpload" });

interface NVLSingleUploadProps {
  defaultImage?: string;
  wrapClass?: string;
  inputClass?: string;
}

const props = defineProps<NVLSingleUploadProps>();

const langs = useLang();

const previewUrl = ref<string>(props.defaultImage ?? "");

const file = ref<File | null>(null);

const isError = ref<boolean>(false);

const inputRef = ref<HTMLInputElement | null>(null);

const emits = defineEmits(["onChange"]);

watch(file, (newValue) => {
  if (newValue) {
    const reader = new FileReader();

    reader.onloadend = () => (previewUrl.value = reader.result as string);

    reader.readAsDataURL(newValue as File);

    isError.value = false;
  }
});

const onChange = (e: any) => {
  const f = e.target.files[0];

  if (f) {
    if (!ACCEPT_IMAGE_TYPE.includes(f.type)) return (isError.value = true);

    if (f.size > 1024 * 1024 * 2) return (isError.value = true);

    file.value = f;

    emits("onChange", f);
  }
};

const onRemove = () => {
  previewUrl.value = "";

  file.value = null;

  emits("onChange", file.value);

  if (inputRef.value && inputRef.value.files) {
    const uploadFiles: File[] = Array.from(inputRef.value.files);

    const filterFiles = uploadFiles.filter((f) => f.name !== file.value?.name);

    const f = new DataTransfer();

    for (let i = 0; i < filterFiles.length; i++) {
      const file = new File([filterFiles[i].name], filterFiles[i].name);

      f.items.add(file);
    }

    inputRef.value.files = f.files;
  }
};
</script>

<template>
  <div :class="['nvl-single-upload', wrapClass]">
    <!-- Input upload -->
    <label v-if="!previewUrl" :class="['upload-control', inputClass]">
      <IconPlus class="control-icon" />
      <input
        class="control-input"
        type="file"
        ref="inputRef"
        :accept="ACCEPT_IMAGE_TYPE.join(',')"
        @input="onChange"
      />
    </label>

    <!-- Preview image -->
    <Image
      v-if="previewUrl"
      fit="contain"
      :src="previewUrl"
      :hasPreview="true"
      :hasRemove="true"
      @onRemove="onRemove"
    />
  </div>

  <NoteMessage
    v-if="isError"
    type="error"
    :message="langs?.common.alertMessage.error.upload"
  />
</template>
