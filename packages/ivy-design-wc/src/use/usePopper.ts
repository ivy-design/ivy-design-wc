import { ref, shallowRef } from "vue";
import { createPopper, type Instance } from "@popperjs/core";

export default (conf = {}) => {
  const visible = ref(false);
  const triggerRef = ref<Element | null>(null);
  const targetRef = ref<HTMLElement | null>(null);
  const arrowRef = ref<HTMLElement | null>(null);

  const Instance = shallowRef<Instance | null>(null);

  const initPopper = () => {
    Instance.value = createPopper(
      triggerRef.value as Element,
      targetRef.value as HTMLElement,

      {
        placement: "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
          {
            name: "arrow",
            options: {
              element: arrowRef.value,
            },
          },
          {
            name: "computeStyles",
            options: {
              gpuAcceleration: true,
            },
          },
        ],
        ...conf,
      }
    );
  };

  const updatePopper = () => {
    Instance.value?.update();
  };

  return {
    visible,
    triggerRef,
    targetRef,
    arrowRef,
    initPopper,
    updatePopper,
  };
};
