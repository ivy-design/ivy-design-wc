<script lang="tsx">
import { shallowRef, defineComponent, onMounted, computed, ref } from 'vue'

interface Conf {
    current: number
    size: number
    sizes: number[]
    total: number
    pageCount: number
    maxSize: number
}

interface LayoutMap {
    prev: Function
    pager: Function
    next: Function
}

export default defineComponent({
    name: 'Pagination',
    inheritAttrs: false,
    props: {
        current: {
            type: String,
            default: '1'
        },
        size: {
            type: String,
            default: '10'
        },
        /**格式如：10, 20, 30 */
        sizes: {
            type: String,
            default: ''
        },
        total: {
            type: String,
            default: '0'
        },
        layout: {
            type: String,
            default: 'prev,pager,next'
        },
        pageCount: {
            type: String,
            default: '7'
        }
    },
    emits: ['current-change', 'size-change', 'prev-click', 'next-click'],
    setup(props, { emit }) {
        const conf = shallowRef<Conf>({
            current: 1,
            size: 10,
            sizes: [],
            total: 0,
            pageCount: 7,
            maxSize: 0
        })

        onMounted(() => {
            const size = parseInt(props.size)
            const total = parseInt(props.total)
            conf.value.current = parseInt(props.current)
            conf.value.size = size
            conf.value.sizes = props.sizes
                ? props.sizes.split(',').map((c) => parseInt(c.trim()))
                : []
            conf.value.total = total
            conf.value.pageCount = parseInt(props.pageCount)
            conf.value.maxSize = Math.ceil(total / size)

            // this.currentPage = this.defaultPage
            // this.pager.current = parseInt(this.defaultPage)
            // this.pager.size = parseInt(this.size)
            // this.pager.sizes = this.sizes.split(',').map((c) => parseInt(c.trim())) || []
            // const maxPage = parseInt((this.pager.total / this.pager.size).toFixed(0))
            // this.pager.maxPage = this.pager.total % this.pager.size === 0 ? maxPage : maxPage + 1
        })

        const layout = computed(() => {
            return props.layout.split(',').map((c) => c.trim())
        })
        const handlePrevPage = () => {
            if (conf.value.current === 1) return
            conf.value.current -= 1
            emit('prev-click', conf.value)
        }

        const handleNextPage = () => {
            if (conf.value.current === conf.value.maxSize) return
            conf.value.current += 1
            emit('next-click', conf.value)
        }

        const handleClick = (pager: number) => {
            if (pager === conf.value.current) return
            conf.value.current = pager
            console.log(conf.value.current, pager)
            emit('current-change', conf.value)
        }

        const internalCurrent = ref(conf.value.current)
        const getLayoutPager = computed(() => {
            return [
                1,
                ...new Array(conf.value.pageCount).fill(
                    internalCurrent.value * conf.value.pageCount
                ),
                conf.value.maxSize
            ]
        })

        const layoutMap = ref<LayoutMap>({
            prev: () => (
                <div class="ivy-pager-btn is-prev" onClick={handlePrevPage}>
                    <slot name="prev">
                        <span>Prev</span>
                    </slot>
                </div>
            ),
            pager: () => {
                const start = 1
                const count = conf.value.pageCount
                return (
                    <div class="ivy-pager-box">
                        {new Array(count).fill(start).map((c, i) => {
                            const curPage: number = i + c

                            return (
                                <a
                                    class={[
                                        'ivy-pager-item',
                                        { 'is-active': conf.value.current === curPage }
                                    ]}
                                    onClick={() => handleClick(curPage)}
                                >
                                    {curPage}
                                </a>
                            )
                        })}
                    </div>
                )
            },
            next: () => (
                <div class="ivy-pager-btn is-next" onClick={handleNextPage}>
                    <slot name="next">
                        <span>Next</span>
                    </slot>
                </div>
            )
        })

        return () => {
            return layout.value.map((c) => (layoutMap.value[c as keyof LayoutMap] as Function)())
        }
    }
})
</script>

<style lang="scss">
:host {
    display: flex;
    align-items: center;
    --ivy-pagination-color: var(--ivy-color-primary, #409eff);
}
.ivy-pager {
    &-box {
        display: inline-flex;
        list-style: none;
        margin: 0 8px;
    }
    &-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        margin: 0 4px;
        cursor: pointer;
        &:hover {
            background-color: #f5f7fa;
        }
        &.is-active {
            cursor: default;
            color: var(--ivy-pagination-color);
        }
    }
    &-btn {
        cursor: pointer;
    }
}
</style>
