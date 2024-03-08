<template>
  <div id="header-container" class="q-mb-lg">
    <div class="row util-text-white util-background-color-blue">
      <div class="col-5">
        <div class="container q-pa-lg text-h5" style="padding-bottom: 10px">
          <p class="q-mb-none">
            <span class="text-h4 text-capitalize text-weight-bold">Epilef</span>
            Alejandro
          </p>
          <p class="q-mb-none">Rodriguez Benavides</p>
        </div>
      </div>
      <div class="col-7 row justify-end">
        <q-avatar size="110px" class="absolute q-ma-lg" square>
          <img
            src="https://pbs.twimg.com/profile_images/1514582388596264962/nfK9BQgI_400x400.jpg"
          />
        </q-avatar>
      </div>
    </div>
    <div class="row">
      <div class="col-12 justify-start q-mb-md">
        <div class="text-h6 q-pl-lg util-text-blue text-engineer">
          Software Engineer
        </div>
      </div>
      <div class="col-sm-4 col-xs-12 q-px-lg header-info">
        <div class="q-pb-sm">
          <q-icon
            name="fa-solid fa-envelope q-mr-sm"
            color="blue-6"
            :size="iconSize"
          />
          <span class="text-subtitle2"
            ><a class="dark-text" href="mailto:epilef.rodriguez@gmail.com"
              >epilef.rodriguez@gmail.com</a
            ></span
          >
        </div>
        <div class="q-pb-sm">
          <q-icon
            name="fa-brands fa-github-alt q-mr-sm github-color"
            :size="iconSize"
          />
          <span class="text-subtitle2"
            ><a
              class="dark-text"
              href="https://github.com/Khanos"
              target="_blank"
              >github.com/Khanos</a
            ></span
          >
        </div>
      </div>
      <div class="col-sm-4 col-xs-12 q-px-lg header-info">
        <div class="q-pb-sm">
          <q-icon
            name="fa-brands fa-hackerrank q-mr-sm hackerrank-color"
            :size="iconSize"
          />
          <span class="text-subtitle2"
            ><a
              class="dark-text"
              href="https://www.hackerrank.com/KhanosVe"
              target="_blank"
              >hackerrank.com/KhanosVe</a
            ></span
          >
        </div>
        <div class="q-pb-sm">
          <q-icon
            name="fa-brands fa-linkedin q-mr-sm likedin-color"
            :size="iconSize"
          />
          <span class="text-subtitle2"
            ><a
              class="dark-text"
              href="https://www.linkedin.com/in/khanos/"
              target="_blank"
              rel="noopener noreferrer"
              >linkedin.com/in/khanos</a
            ></span
          >
        </div>
      </div>
      <div class="col-sm-4 col-xs-12 q-px-lg header-info">
        <div class="q-pb-sm">
          <q-icon
            name="fa-brands fa-instagram q-mr-sm instgram-color-gradient"
            :size="iconSize"
          />
          <span class="text-subtitle2"
            ><a
              class="dark-text"
              href="https://www.instagram.com/epilef.js/"
              target="_blank"
              rel="noopener noreferrer"
              >@epilef.js</a
            ></span
          >
        </div>
        <div class="q-pb-sm">
          <q-icon
            name="fa-solid fa-user-tie q-mr-sm portafolio-color"
            :size="iconSize"
          />
          <span class="text-subtitle2"
            ><a
              class="dark-text"
              href="https://www.epilef.org"
              target="_blank"
              rel="noopener noreferrer"
              >Portfolio</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    const iconSize = '20px';
    return { iconSize };
  },
});
</script>

<style></style>
