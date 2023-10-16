<script setup lang="ts">
import { useMelonJsCustomLoader } from './CustomLoader.composable';

const { progress } = useMelonJsCustomLoader()
</script>

<template>
  <div class="custom-loader" v-if="progress < 100">{{ Math.round(progress) }} / 100</div>
</template>

<style>
.custom-loader {
  width: 100%;
  height: 100vh;
  font-family: PressStart2P;
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2E3444;
}
</style>
