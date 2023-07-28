<script lang="tsx">
import { defineComponent, computed } from "vue";
import { genLoading } from '@/utils/icons'

export default defineComponent({
      name: "Loading",
      inheritAttrs: false,
      props:{
            text: String,
            loading: Boolean
      },
      setup(props) {
          const isLoading = computed(() => {
              return props.loading
          })
          return () => {
              return [
                <div class="loading" v-show={ isLoading.value }>
                  <div part="icon" class="icon">
                    <slot name="icon">
                      { genLoading({class: 'icon-loading'}) }
                    </slot>
                  </div>
                    {props.text ? <div class="text">{ props.text }</div> : null}
                </div>,
                <div class="content" part="content"><slot></slot></div>
              ]
          }
      }
});
</script>

<style lang="scss">
:host {
    --ivy-loading-mask-color: rgba(255, 255, 255, 0.85);
    --ivy-loading-text-color: var(--ivy-text-color-regular, #606266);
    --ivy-loading-text-margin-top: 12px;
    --ivy-loading-text-font-size: 13px;
    position: relative;
    display: block;
}
.loading{
    background-color: var(--ivy-loading-mask-color);
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.icon{
    line-height: 1em;
    font-size: 24px;
    animation: spin 1s linear infinite;
    transform-origin: center center;
}
.icon-loading{
    display: block;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}
.text{
    margin-top: var(--ivy-loading-text-margin-top);
    color: var(--ivy-loading-text-color);
    font-size: var(--ivy-loading-text-font-size);
}
</style>