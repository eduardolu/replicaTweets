import { ref } from "vue";

export const useFormTweets = () => {
  const showForm = ref(false);

  const opencloseForm = () => {
    showForm.value = !showForm.value;
  };
  return { showForm, opencloseForm };
};
