<template>
  <headerUI>
    <div class="header__title">
      <img class="header__brain" src="@/assets/img/brain.png" alt="" />
      <span v-if="!resultLoad" class="header__text yellow-text uppercase-text"
        >тест на определение iq</span
      >
      <span
        v-else
        class="header__text yellow-text uppercase-text"
        style="font-size: 20px"
        >готово!</span
      >
    </div>
  </headerUI>
  <main class="main">
    <section class="test">
      <div class="container">
        <div class="question-card" v-if="!testEnd">
          <div class="status-container">
            <div class="status-bar">
              <div ref="statusBar" class="status"></div>
            </div>
          </div>
          <transition name="fade" mode="out-in">
            <div class="question-card__transition" :key="questionNumber">
              <div class="container">
                <h3 class="question-card__title">
                  {{ questionsData[questionNumber].question }}
                </h3>
              </div>
              <div
                v-if="questionsData[questionNumber].image"
                class="question-card__img"
              >
                {{ questionsData[questionNumber].image }}
                <img
                  class="question-card__img"
                  :src="
                    require(`@/assets/img/${questionsData[questionNumber].image}`)
                  "
                  alt=""
                />
              </div>

              <div
                v-if="
                  questionsData[questionNumber].type ===
                  'choose-one-text-answer'
                "
                class="question-card__answers"
              >
                <div
                  v-for="(answer, index) in questionsData[questionNumber]
                    .answers"
                  :key="index"
                  class="question-card__answer"
                >
                  <input
                    type="radio"
                    :id="'answer' + `${index + 1}`"
                    name="question-answer"
                    :value="answer"
                    v-model="picked"
                  />
                  <label
                    @click="chooseAnswer"
                    :for="'answer' + `${index + 1}`"
                    >{{ answer }}</label
                  >
                </div>
              </div>
              <div
                v-if="
                  questionsData[questionNumber].type ===
                  'choose-one-color-answer'
                "
                class="question-card__answers-grid"
              >
                <div
                  v-for="(answer, index) in questionsData[questionNumber]
                    .answers"
                  :key="index"
                  class="question-card__answer-color"
                >
                  <input
                    type="radio"
                    :id="'answer' + `${index + 1}`"
                    name="question-answer"
                    :value="answer"
                    v-model="picked"
                  />
                  <label
                    v-bind:style="{ 'background-color': `${answer}` }"
                    @click="chooseAnswer"
                    :for="'answer' + `${index + 1}`"
                  >
                  </label>
                </div>
              </div>
              <div
                v-if="
                  questionsData[questionNumber].type === 'choose-one-img-answer'
                "
                class="question-card__answers-img"
              >
                <div
                  v-for="(answer, index) in questionsData[questionNumber]
                    .answers"
                  :key="index"
                  class="question-card__answer-img"
                >
                  <input
                    type="radio"
                    :id="'answer' + `${index + 1}`"
                    name="question-answer"
                    :value="answer"
                    v-model="picked"
                  />
                  <label @click="chooseAnswer" :for="'answer' + `${index + 1}`">
                    {{ answer }}
                  </label>
                </div>
              </div>
            </div>
          </transition>
          <button
            class="test__btn uppercase-text"
            :class="{ choosed: choosed }"
            @click="nextQuestion"
          >
            далее
          </button>
        </div>
        <div v-if="testEnd" class="test__results">
          <div v-if="!resultLoad" class="status-container">
            <div class="status-bar">
              <div style="width: 100%" class="status"></div>
            </div>
          </div>
          <div class="test-results__info">
            <div v-if="!resultLoad" class="test-results__loading">
              <div class="container">
                <h3 class="question-card__title">Обработка результатов</h3>
              </div>
              <div class="loader">
                <span style="--i: 1"></span>
                <span style="--i: 2"></span>
                <span style="--i: 3"></span>
                <span style="--i: 4"></span>
                <span style="--i: 5"></span>
                <span style="--i: 6"></span>
                <span style="--i: 7"></span>
                <span style="--i: 8"></span>
                <span style="--i: 9"></span>
                <span style="--i: 10"></span>
                <span style="--i: 11"></span>
              </div>

              <div class="test-results__loader-text">
                <div class="container">
                  <p ref="loadingText">Определение стиля мышления</p>
                </div>
              </div>
            </div>
            <div v-else class="test-results__loaded">
              <img class="lightning1" src="@/assets/img/lightning.png" alt="" />
              <img
                class="lightning2"
                src="@/assets/img/lightning2.png"
                alt=""
              />
              <div class="container">
                <div class="test-results__block">
                  <h2 class="test-results__title1 uppercase-text">
                    ваш результат рассчитан:
                  </h2>
                  <p class="test-results__text1">
                    <span class="underline-text">Вы относитесь к 3%</span>
                    респондентов, чей уровень интеллекта более чем на 15 пунктов
                    отличается от среднего в большую или меньшую сторону!
                  </p>
                  <h2 class="test-results__title2 uppercase-text green-text">
                    скорее получите свой результат!
                  </h2>
                  <div class="test-results__text2-div">
                    <p class="test-results__text2 uppercase-text">
                      В целях защиты персональных данных результат теста, их
                      подробная интерпретация и рекомендации доступны в виде
                      голосового сообщения по звонку с вашего мобильного
                      телефона
                    </p>
                  </div>
                  <p class="test-results__text3 green-text">
                    Звоните скорее, запись доступна всего <br />
                    <span class="timer"
                      >{{ minutes < 10 ? "0" + minutes : minutes }}:{{
                        seconds < 10 ? "0" + seconds : seconds
                      }}
                    </span>
                    {{
                      minutes > 4 ? "минут" : minutes > 1 ? "минуты" : "минута"
                    }}
                  </p>
                  <div class="test-results__call">
                    <img
                      :class="{ animate: seconds % 5 }"
                      src="@/assets/img/call.svg"
                      alt="call-icon"
                      @click="showPersonalInfo"
                    />
                    <p class="test-results__call-text">
                      Позвонить и прослушать результат
                    </p>
                  </div>
                  <Suspense v-if="showInfo">
                    <template #default>
                      <PersonalInfo />
                    </template>
                    <template #fallback>
                      <div class="loading-info">
                        <div class="loader">
                          <span style="--i: 1"></span>
                          <span style="--i: 2"></span>
                          <span style="--i: 3"></span>
                          <span style="--i: 4"></span>
                          <span style="--i: 5"></span>
                          <span style="--i: 6"></span>
                          <span style="--i: 7"></span>
                          <span style="--i: 8"></span>
                          <span style="--i: 9"></span>
                          <span style="--i: 10"></span>
                          <span style="--i: 11"></span>
                        </div>
                      </div>
                    </template>
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import PersonalInfo from "@/components/PersonalInfo";
export default {
  components: {
    PersonalInfo,
  },
  setup() {
    onMounted(() => {
      statusBar.value.style.width = statusBarWidth + "%";
    });
    const questionsData = [
      {
        type: "choose-one-text-answer",
        question: "Ваш пол:",
        answers: ["Мужчина", "Женщина"],
      },
      {
        type: "choose-one-text-answer",
        question: "Укажите ваш возраст:",
        answers: ["До 18", "От 18 до 28", "От 29 до 35", "От 36"],
      },
      {
        type: "choose-one-text-answer",
        question: "Выберите лишнее:",
        answers: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
      },
      {
        type: "choose-one-text-answer",
        question: "Продолжите числовой ряд: 18 20 24 32",
        answers: ["62", "48", "74", "57", "60", "77"],
      },
      {
        type: "choose-one-color-answer",
        question: "Выберите цвет, который сейчас наиболее вам приятен:",
        answers: [
          "#A8A8A8",
          "#0000A9",
          "#00A701",
          "#F60100",
          "#FDFF19",
          "#A95403",
          "#000000",
          "#850068",
          "#46B3AC",
        ],
      },
      {
        type: "choose-one-color-answer",
        question:
          "Отдохните пару секунд, еще раз выберите цвет, который сейчас наиболее вам приятен:",
        answers: [
          "#A8A8A8",
          "#46B3AC",
          "#A95403",
          "#00A701",
          "#000000",
          "#F60100",
          "#850068",
          "#FDFF19",
          "#0000A9",
        ],
      },
      {
        type: "choose-one-text-answer",
        question: "Какой из городов лишний?",
        answers: [
          "Вашингтон",
          "Лондон",
          "Париж",
          "Нью-Йорк",
          "Москва",
          "Оттава",
        ],
      },
      {
        type: "choose-one-img-answer",
        question: "Выберите правильную фигуру из четырёх пронумерованных.",
        image: "iq_image-q1.jpg",
        answers: ["1", "2", "3", "4"],
      },
      {
        type: "choose-one-text-answer",
        question: "Вам привычнее и важнее:",
        answers: [
          "Наслаждаться каждой минутой проведенного времени",
          "Быть устремленными мыслями в будущее",
          "Учитывать в ежедневной практике опыт",
        ],
      },
      {
        type: "choose-one-text-answer",
        question:
          "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
        image: "iq_image-q2.jpg",
        answers: [
          "Оно остроконечное",
          "Оно устойчиво",
          "Оно-находится в состоянии равновесия",
        ],
      },
      {
        type: "choose-one-img-answer",
        question: "Вставьте подходящее число",
        image: "iq_image-q3.jpg",
        answers: ["34", "36", "53", "44", "66", "42"],
      },
    ];
    const answers = ref([]);
    const questionNumber = ref(0);
    const choosed = ref(false);
    const testEnd = ref(false);
    const resultLoad = ref(false);
    const showInfo = ref(false);
    const picked = ref(null);
    const statusBar = ref(null);
    const loadingText = ref(null);
    const questionsLength = questionsData.length;
    const statusBarWidth = Math.round(100 / questionsLength);

    const minutes = ref("10");
    const seconds = ref("0");

    let timerId = null;
    let deadline = 1000 * 60 * 10;
    const chooseAnswer = () => {
      if (!choosed.value) {
        choosed.value = true;
      }
    };
    const showPersonalInfo = () => {
      showInfo.value = true;
      testBlock.value.style.height = 100 + "%";
    };
    const testEnding = () => {
      testEnd.value = true;
      let i = 0;
      let loadTimer = setInterval(() => {
        if (i < 10) {
          loadingText.value.innerText += ".";
          i++;
        } else {
          i = 0;
          loadingText.value.innerText = "Определение стиля мышления";
        }
      }, 200);
      setTimeout(() => {
        clearInterval(loadTimer);
        resultLoad.value = true;
      }, 1000);
      setTimeout(() => {
        timerId = setInterval(() => {
          CountdownTimer();
          if (deadline <= 0 || showInfo.value) {
            clearInterval(timerId);
          }
        }, 1000);
      }, 500);
    };
    const nextQuestion = () => {
      if (questionNumber.value <= questionsLength - 1) {
        if (picked.value) {
          answers.value.push(picked.value);
          choosed.value = false;
          picked.value = null;
          questionNumber.value === questionsLength - 1
            ? testEnding()
            : questionNumber.value++;
          statusBar.value.style.width =
            statusBarWidth * (questionNumber.value + 1) + "%";
        }
      }
    };
    const CountdownTimer = () => {
      deadline -= 1000;
      minutes.value = deadline > 0 ? Math.floor(deadline / 1000 / 60) % 60 : 0;
      seconds.value = deadline > 0 ? Math.floor(deadline / 1000) % 60 : 0;
    };
    return {
      questionNumber,
      answers,
      choosed,
      testEnd,
      picked,
      minutes,
      seconds,
      showInfo,
      resultLoad,
      statusBar,
      loadingText,
      questionsData,
      chooseAnswer,
      nextQuestion,
      showPersonalInfo,
    };
  },
};
</script>
