<template>
  <router-view />
</template>
<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      setHeight();
      window.addEventListener("resize", setHeight);
    });
    const setHeight = () => {
      let vh = (window.innerHeight - 46) * 0.01;
      let vhT = (window.innerHeight - 70) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vhT", `${vhT}px`);
    };
  },
};
</script>


