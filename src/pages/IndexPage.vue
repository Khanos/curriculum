<template>
  <q-page>
    <HeaderComponent />
    <ExperienceComponent />
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models'; -> these are interfaces (not db models)
// import ExampleComponent from 'components/ExampleComponent.vue';
import HeaderComponent from 'components/HeaderComponent.vue';
import ExperienceComponent from 'components/ExperienceComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    // ExampleComponent
    HeaderComponent,
    ExperienceComponent,
  },
  setup() {
    const test = ref(false);
    return { test };
  },
});
</script>
