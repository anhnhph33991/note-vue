<template>
  <a-menu
    v-model:selectedKeys="current"
    mode="horizontal"
    :items="items"
    @click="navigation"
  />
</template>

<script setup>
import { h, ref } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const current = ref(["notes"]);

const items = ref([
  {
    key: "notes",
    icon: () => h(MailOutlined),
    label: "Notes",
    title: "Notes",
    name: "notes",
  },
  {
    key: "stats",
    icon: () => h(AppstoreOutlined),
    label: "Stats",
    title: "Stats",
    name: "stats",
  },
]);

const navigation = ({ key }) => {
  const selectedItem = items.value.find((item) => item.key === key);

  if (selectedItem && selectedItem.name) {
    router.push({ name: selectedItem.name });
  }
};
</script>
