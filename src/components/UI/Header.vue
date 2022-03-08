<template>
  <header class="header">
    <div class="container">
      <div class="header-flex">
        <div class="humburger" @click="burgerClick">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <slot></slot>
      </div>
      <nav class="menu">
        <div class="menu-drop" :class="{ active: burgerIsActive }">
          <div class="container">
            <img
              src="@/assets/img/close.svg"
              alt=""
              class="humburger-close"
              @click="burgerClick"
            />
            <ul class="menu__list">
              <li class="menu__item" @click="burgerClick">
                <router-link to="/#main" class="item__link uppercase-text"
                  >главная</router-link
                >
              </li>
              <li class="menu__item" @click="burgerClick">
                <router-link to="/#info" class="item__link uppercase-text"
                  >информация о тесте</router-link
                >
              </li>
              <li class="menu__item" @click="burgerClick">
                <router-link to="/#testing" class="item__link uppercase-text"
                  >пройти тест</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "headerUI",
  setup() {
    const burgerIsActive = ref(false);
    const burgerClick = () => {
      burgerIsActive.value = !burgerIsActive.value;
    };
    return {
      burgerIsActive,
      burgerClick,
    };
  },
};
</script>

