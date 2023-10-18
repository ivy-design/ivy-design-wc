import { ref } from 'vue'
/***
 * 获取当前组件的宿主元素-通过 ref 的上级元素获取
 ***/
export const useHostElement = () => {
    const el = ref<HTMLElement | null>(null)
    const getHostElement = () => ((el.value as HTMLElement).parentNode as ShadowRoot).host
    return {
        el,
        getHostElement
    }
}

export default useHostElement
