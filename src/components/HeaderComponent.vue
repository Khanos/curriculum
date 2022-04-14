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
        <div class="text-h6 q-pl-lg util-text-blue">Software Engineer</div>
      </div>
      <div class="col-4 q-px-lg">
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
            name="fa-solid fa-envelope q-mr-sm"
            color="info"
            :size="iconSize"
          />
          <span class="text-subtitle2">epilef.rodriguez@gmail.com</span>
        </div>
      </div>
      <div class="col-4 q-px-lg">
        <div class="q-pb-sm">
          <q-icon
            name="fa-solid fa-phone q-mr-sm"
            color="info"
            :size="iconSize"
          />
          <span class="text-subtitle2">This is a test</span>
        </div>
        <div class="q-pb-sm">
          <q-icon
            name="fa-solid fa-phone q-mr-sm"
            color="info"
            :size="iconSize"
          />
          <span class="text-subtitle2">This is a test</span>
        </div>
      </div>
      <div class="col-4 q-px-lg">
        <div class="q-pb-sm">
          <q-icon
            name="fa-solid fa-phone q-mr-sm"
            color="info"
            :size="iconSize"
          />
          <span class="text-subtitle2">This is a test</span>
        </div>
        <div class="q-pb-sm">
          <q-icon
            name="fa-solid fa-phone q-mr-sm"
            color="info"
            :size="iconSize"
          />
          <span class="text-subtitle2">This is a test</span>
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
