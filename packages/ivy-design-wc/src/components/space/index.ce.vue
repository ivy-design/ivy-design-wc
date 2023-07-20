<script lang="tsx">
import { defineComponent, ref, onMounted, computed, watch } from 'vue'

export default defineComponent({
  name: 'Space',
  inheritAttrs: false,
  props: {
    vertical: Boolean,
    alignment: {
      type: String,
      default: 'center',
      validator(val:string) {
        return ['flex-start', 'flex-end', 'center','normal','stretch'].includes(val)
      }
    },
    wrap: Boolean,
    size: {
      type: String,
      default: 'medium',
      validator: (val:string) => {
        return ['small', 'medium', 'large', 'custom'].includes(val)
      }
    },
    gap: {
      type: String,
      default: '12px'
    }
  },
  setup (props) {
    const slot = ref()
    const children = ref([])
    onMounted(() => {
        slot.value.assignedNodes().forEach(c => {
          if (c.nodeType === 1) {
            children.value.push(c.outerHTML);
          } else if (c.nodeType === 3 && !/^\s+$/.test(c.nodeValue)) {
            children.value.push(c.nodeValue);
          }
        })

    })

    const sizeMap = {
      small: '8px',
      medium: '12px',
      large: '24px',
    }
    const gap = ref(props.size === 'custom' ? props.gap : sizeMap[props.size])

    const spaceStyle = computed(()=>{
      return {
        alignItems: props.alignment,
        flexDirection: props.vertical ? 'column' : 'row',
        gap: gap.value
      }
    })

    watch(() => props.gap, val=> {
      gap.value = props.size === 'custom' ? val : sizeMap[props.size]
    })

    return () => [
      <slot hidden ref={el => slot.value = el}></slot>,
      <div class={['space', {'is-wrap': props.wrap}]} style={ spaceStyle.value }>
        {children.value.map(c => {
          return <div class="space__item" innerHTML={c}></div>
        })}
      </div>
    ]
  }
})
</script>

<style lang="scss">
:host {
  display: inline-block;
}
.space {
  display: flex;
  gap: 12px;
  &.is-wrap {
    flex-wrap: wrap;
  }
}
</style>