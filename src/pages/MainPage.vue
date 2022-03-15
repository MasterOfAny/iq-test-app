<template>
  <headerUI></headerUI>
  <main class="main">
    <section class="main-page">
      <div id="main"></div>
      <div class="container">
        <div class="main-page__content">
          <p class="main-page__text">Пройдите точный и быстрый</p>
          <h1 class="main-page__title uppercase-text yellow-text">
            тест на определение iq
          </h1>
          <div class="img-wrapper">
            <div class="gradient"></div>
            <img
              class="main-page__img"
              src="../assets/img/brain.png"
              alt="brain"
            />
          </div>

          <router-link to="/test" class="main-page__btn uppercase-text"
            >пройти тест</router-link
          >
          <div class="main-page__description">
            <p class="main-page__description-text yellow-text">
              И получите рекомендации <br class="break" />
              по развитию своего интеллекта
            </p>
            <p class="main-page__description-text">
              и улучшению финансового <br class="break" />
              благосостояния и личной жизни
            </p>
          </div>
          <div class="main-page__up-container">
            <div class="main-page__up">
              <img src="../assets/img/arrow_up.svg" alt="arrow-up" />
            </div>
            <span class="main-page__up-text">Подробнее</span>
          </div>
        </div>
      </div>
    </section>
    <section id="info" class="info-page">
      <div class="info-page__content">
        <div class="info-page__quot-gradient">
          <div class="container">
            <div class="info-page__quot">
              <img
                src="../assets/img/quote_up.svg"
                alt="quote"
                class="quote-up"
              />

              <p class="info-page__quot-text">
                Профессиональный IQ-тест позволяет не только определить
                коэффициент вашего интеллекта, но и выработать список
                рекомендаций для повышения этого показателя.
              </p>

              <img
                src="../assets/img/quote_down.svg"
                alt="quote"
                class="quote-down"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="info-page__description">
          <p class="info-page__text">
            Также по результатам теста
            <span class="bold-text uppercase-text"> вы получите</span>
            подробные
            <span class="bold-text uppercase-text">советы</span> по определению
            наиболее перспективной для
            <span class="bold-text uppercase-text">вашего типа</span>
            <span class="bold-text"> интеллекта</span>
            <span class="bold-text uppercase-text"> сферы деятельности</span>,
            которая принесет вам скорейший финансовый результат.
          </p>
          <img
            src="../assets/img/iq_info.png"
            class="info-page__img"
            alt="brain-info"
          />
          <router-link to="/test" class="main-page__btn uppercase-text"
            >пройти тест</router-link
          >
        </div>
      </div>
    </section>
    <section id="testing" class="testing-page">
      <div class="container">
        <div class="testing-page__content">
          <p class="testing-page__text">
            Прохождение теста займет у вас не более
            <span class="yellow-text">12 минут</span>, а его результаты вы
            сможете
            <span class="yellow-text">использовать всю жизнь.</span>
          </p>
          <img
            class="lightning-first"
            src="../assets/img/lightning_first.png"
            alt="lightning"
          />
          <img
            class="lightning-second"
            src="../assets/img/lightning_second.png"
            alt="lightning"
          />
          <div class="testing-page__description">
            <p class="testing-page__description-text">
              Профессиональная интерпретация и детально
              <span class="bold-text">проработанные рекомендации</span>
              позволят вам качественно
              <span class="bold-text"> изменить все аспекты своей жизни:</span>
              от финансового до любовного.
            </p>
          </div>
          <router-link to="/test" class="testing-page__btn uppercase-text"
            >пройти тест</router-link
          >
          <p class="testing-page__copyright">© 2019</p>
        </div>
      </div>
    </section>
  </main>
</template>


