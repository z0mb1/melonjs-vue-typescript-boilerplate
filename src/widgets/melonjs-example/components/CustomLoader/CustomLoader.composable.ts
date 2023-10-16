import { event } from "melonjs";
import { ref } from "vue";

export const useMelonJsCustomLoader = () => {
  const progress = ref(0);

  event.on(
    event.LOADER_PROGRESS,
    (val: number) => {
      progress.value = val * 100;
    })

  return {
    progress,
  };
}
