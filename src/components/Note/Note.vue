<template>
  <div style="padding: 10px">
    <a-card hoverable style="align-content: center">
      <p>
        {{ note.content }}
      </p>

      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
      </div>

      <template #actions>
        <a href="" class="button">Edit</a>
        <a href="" class="button" @click.prevent="handleDeleteClicked"
          >Delete</a
        >
      </template>
    </a-card>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/** emit */

const emit = defineEmits(["deleteClicked"]);

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = props.note.content.length > 1 ? "characters" : "character";

  return `${length} ${description}`;
});

const handleDeleteClicked = () => {
  // truyền tham số thứ 2 là id
  emit("deleteClicked", props.note.id);
};
</script>

<style lang="scss" scoped></style>
