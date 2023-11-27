<template>
  <Menu :opencloseForm="opencloseForm" :showForm="showForm" />
  <TweetForm
    :showForm="showForm"
    :reloadTweets="reloadTweets"
    :opencloseForm="opencloseForm"
  />
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets" />
</template>

<script>
import { ref } from "vue";
import Menu from "./components/Menu";
import TweetForm from "./components/TweetForm";
import TweetList from "./components/TweetList";
import { useFormTweets } from "./hooks/useFormTweets";
import { getTweetApi } from "./api/tweet";

export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
    TweetList,
  },
  setup() {
    let tweets = ref(getTweetApi().reverse());

    const reloadTweets = () => {
      tweets.value = getTweetApi().reverse();
    };

    return {
      ...useFormTweets(),
      tweets,
      reloadTweets,
    };
  },
};
</script>

<style lang="scss"></style>
