<template>
  <Menu :opencloseForm="opencloseForm" :showForm="showForm" />
  <TweetForm :showForm="showForm" />
</template>

<script>
import Menu from "./components/Menu.vue";
import TweetForm from "./components/TweetForm.vue";
import { useFormTweets } from "./hooks/useFormTweets";
export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
  },
  setup() {
    return {
      ...useFormTweets(),
    };
  },
};
</script>

<style lang="scss"></style>
