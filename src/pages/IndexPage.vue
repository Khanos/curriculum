<template>
  <q-page class="row items-center justify-center">
    <h1>this is a test</h1>
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    // ExampleComponent
  },
  setup() {
    const test = ref(false);
    return { test };
  },
});
</script>
