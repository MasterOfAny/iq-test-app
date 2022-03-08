<template>
  <div class="personal-info">
    <div class="info-block" v-for="(info, key) in personalInfo" :key="key">
      <span class="info-tag underline-text">{{
        key.replace(/_/g, " ") + ":"
      }}</span>
      <span class="info-value">
        {{ Array.isArray(info) ? showArray(info) : info }}
      </span>
    </div>
  </div>
</template>



<script>
import { ref } from "vue";
import axios from "axios";
const loadPersonalInfo = async (loadInfo) => {
  let responce = await axios.get(loadInfo);
  let propertyNames = Object.keys(responce.data);
  let propertyValues = Object.values(responce.data);
  propertyNames = propertyNames.slice(0, -3);
  propertyValues = propertyValues.slice(0, -3);
  for (let i = 0; i < propertyValues.length; i++) {
    if (propertyValues[i].includes("https")) {
      responce = await axios.get(propertyValues[i] + "?format=json");
      propertyValues[i] = responce.data.name;
    }
    if (Array.isArray(propertyValues[i])) {
      for (let j = 0; j < propertyValues[i].length; j++) {
        responce = await axios.get(propertyValues[i][j] + "?format=json");
        propertyValues[i][j] = responce.data.name
          ? responce.data.name
          : responce.data.title;
      }
    }
  }
  return Object.assign(
    ...propertyNames.map((k, i) => ({ [k]: propertyValues[i] }))
  );
};
export default {
  async setup() {
    const personalInfo = ref(
      await loadPersonalInfo("https://swapi.dev/api/people/1/?format=json")
    );

    const showArray = (info) => {
      if (info.length === 0) return "none";
      let str = "";
      for (let item of info) {
        str = str + item + ", ";
      }
      return str.slice(0, -2);
    };

    return {
      personalInfo,
      showArray,
    };
  },
};
</script>
