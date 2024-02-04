import { ref } from 'vue'
import {
    useFloating,
    arrow,
    offset,
    flip,
    shift,
    type VirtualElement,
    type FloatingElement,
    type Placement,
    type UseFloatingOptions
} from '@floating-ui/vue'

export const usePopper = (conf: UseFloatingOptions = {}) => {
    const visible = ref(false)
    const referenceEl = ref<VirtualElement>()
    const floatEl = ref<FloatingElement>()
    const floatArrow = ref()
    const placement = ref<Placement>('bottom')
    const { middleware = [], ...other } = conf

    const createPopper = () => {
        const {
            floatingStyles,
            update,
            middlewareData,
            placement: finalPlacement
        } = useFloating(referenceEl, floatEl, {
            placement,
            middleware: [
                offset(10),
                ...(middleware as any),
                shift(),
                flip(),
                arrow({ element: floatArrow })
            ],
            ...other
        })
        return { floatingStyles, update, middlewareData, finalPlacement }
    }

    return {
        visible,
        referenceEl,
        floatEl,
        floatArrow,
        createPopper,
        placement
    }
}
export default usePopper
