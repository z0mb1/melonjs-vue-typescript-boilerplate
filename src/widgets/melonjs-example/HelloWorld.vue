<script setup lang="ts">
import { audio, loader, state, device, video, plugin, pool } from "melonjs";
import TitleScreen from "./scripts/stage/title.js";
import PlayScreen from "./scripts/stage/play.js";
import PlayerEntity from "./scripts/renderables/player.js";
import DataManifest from "./manifest.js";
import { onMounted } from "vue";
import { CustomLoader } from './components/CustomLoader';

defineProps<{
  useCustomLoader?: boolean;
}>()

const onload = () => {

  // initialize the display canvas once the device/browser is ready
  if (!video.init(document.documentElement.clientWidth, document.documentElement.clientHeight, { parent: "screen", scale: "auto" })) {
    alert("Your browser does not support HTML5 canvas.");
    return;
  }

  // Initialize the audio.
  audio.init("mp3,ogg");

  // allow cross-origin for image/texture loading
  loader.crossOrigin = "anonymous";

  // initialize the debug plugin in development mode.
  if (import.meta.env.DEV) {
    import("@melonjs/debug-plugin").then((debugPlugin) => {
      // automatically register the debug panel
      plugin.register(debugPlugin.DebugPanelPlugin, "debugPanel");
    });
  }

  // set and load all resources.
  loader.preload(DataManifest, function () {
    // set the user defined game stages
    state.set(state.MENU, new TitleScreen());
    state.set(state.PLAY, new PlayScreen());

    // add our player entity in the entity pool
    pool.register("mainPlayer", PlayerEntity);

    // Start the game.
    state.change(state.PLAY, false);
  });
}

onMounted(() => {
  device.onReady(onload);
})
</script>

<template>
  <Transition v-if="useCustomLoader" name="fade">
    <CustomLoader />
  </Transition>
    
  <div id="screen" />
</template>

<style>
#screen canvas {
  margin: auto;
  /* Hide the gap for font descenders. */
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
