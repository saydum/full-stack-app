<template>
  <div class="d-flex">
    <div class="pb-4 flex-grow-1">
      <h3>{{ title }}</h3>
    </div>
    <div v-if="showButton" class="p-2">
      <a href="/add" class="btn btn-outline-success">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// Определяем свойства компонента
const props = defineProps<{
  title: string;
  showButton?: boolean;
  buttonText?: string;
}>();

// Значения по умолчанию для свойств
props.showButton = props.showButton ?? true;
props.buttonText = props.buttonText ?? 'New Employee';
</script>