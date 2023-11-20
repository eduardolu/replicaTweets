<template>
  <div class="tweet-form container" :class="{ open: showForm }">
    <form @submit.prevent="sendTweet">
      <input
        type="text"
        class="form-control"
        placeholder="Tu nombre"
        v-model="username"
      />
      <textarea
        class="form-control"
        rows="3"
        placeholder="Escribe tu tweet"
        v-model="tweet"
      ></textarea>
      <button type="submit" class="btn btn-primary">Enviar Tweet</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { seveTweet } from "../api/tweet";
export default {
  props: {
    showForm: Boolean,
  },
  setup() {
    let username = ref("");
    let tweet = ref("");

    const sendTweet = () => {
      seveTweet(username.value, tweet.value);
      username.value = "";
      tweet.value = "";
    };
    return {
      sendTweet,
      username,
      tweet,
    };
  },
};
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0;
  overflow: hidden;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;
    input {
      margin-bottom: 10px;
    }
    button {
      margin-top: 10px;
      width: 100%;
    }
  }
}
</style>
