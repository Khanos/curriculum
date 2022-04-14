<template>
  <div id="header-container">
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
      <div class="col-4 text-center q-px-lg">
        <div class="q-pb-sm">
          <q-icon
            name="fa-solid fa-phone q-mr-sm"
            color="green-7"
            :size="iconSize"
          />
          <span class="text-subtitle2">(+58) 0414-3752928</span>
        </div>
        <div class="q-pb-sm">
          <q-icon
            name="fa-brands fa-google q-mr-sm"
            color="red-6"
            :size="iconSize"
          />
          <span class="text-subtitle2"
            ><a href="mailto:epilef.rodriguez@gmail.com"
              >epilef.rodriguez@gmail.com</a
            ></span
          >
        </div>
      </div>
      <div class="col-4 text-center q-px-lg">
        <div class="q-pb-sm">
          <q-icon
            name="fa-brands fa-github-alt q-mr-sm github-color"
            :size="iconSize"
          />
          <span class="text-subtitle2 util-simple-link" @click="goGithub"
            >github.com/Khanos</span
          >
        </div>
        <div class="q-pb-sm">
          <q-icon
            name="fa-brands fa-linkedin q-mr-sm likedin-color"
            :size="iconSize"
          />
          <span class="text-subtitle2 util-simple-link" @click="goLinkedin"
            >linkedin.com/in/khanos</span
          >
        </div>
      </div>
      <div class="col-4 text-center q-px-lg">
        <div class="q-pb-sm">
          <q-icon
            name="fa-brands fa-instagram q-mr-sm instgram-color-gradient"
            :size="iconSize"
          />
          <span class="text-subtitle2 util-simple-link" @click="goInstagram"
            >@epilef.js</span
          >
        </div>
        <div class="q-pb-sm">
          <q-icon
            name="fa-solid fa-link q-mr-sm portafolio-color"
            :size="iconSize"
          />
          <span class="text-subtitle2 util-simple-link" @click="goPortafolio"
            >khanos.github.io</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

const goGithub = () => {
  window.open('https://github.com/Khanos', '_blank');
};
const goLinkedin = () => {
  window.open('https://www.linkedin.com/in/khanos/', '_blank');
};
const goInstagram = () => {
  window.open('https://www.instagram.com/epilef.js/', '_blank');
};
const goPortafolio = () => {
  window.open('https://khanos.github.io/', '_blank');
};

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    const iconSize = '20px';
    return { iconSize };
  },
  methods: {
    goGithub,
    goLinkedin,
    goInstagram,
    goPortafolio,
  },
});
</script>

<style></style>
