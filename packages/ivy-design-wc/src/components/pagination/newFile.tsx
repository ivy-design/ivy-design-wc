import { onMounted, defineComponent, computed, shallowRef } from 'vue'

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
        const pager = shallowRef({
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
            pager.value.current = parseInt(props.current)
            pager.value.size = size
            pager.value.sizes = props.sizes
                ? props.sizes.split(',').map((c) => parseInt(c.trim()) as number)
                : []
            pager.value.total = total
            pager.value.pageCount = parseInt(props.pageCount)
            pager.value.maxSize = Math.ceil(total / size)

            // this.currentPage = this.defaultPage
            // this.pager.current = parseInt(this.defaultPage)
            // this.pager.size = parseInt(this.size)
            // this.pager.sizes = this.sizes.split(',').map((c) => parseInt(c.trim())) || []
            // const maxPage = parseInt((this.pager.total / this.pager.size).toFixed(0))
            // this.pager.maxPage = this.pager.total % this.pager.size === 0 ? maxPage : maxPage + 1
        })

        const conf = computed(() => {
            const size = parseInt(props.size)
            const total = parseInt(props.total)
            return {
                current: parseInt(props.current),
                size: size,
                sizes: props.sizes.split(',').map((c) => parseInt(c.trim())) || [],
                total: total,
                pageCount: parseInt(props.pageCount),
                maxSize: Math.ceil(total / size)
            }
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

        const layoutMap = {
            prev: () => (
                <div class="ivy-pager-btn is-prev" onClick={handlePrevPage}>
                    <slot name="prev">
                        <span>Prev</span>
                    </slot>
                </div>
            ),
            pager: () => {
                const start = 1
                const count = 7
                return (
                    <div class="ivy-pager-box">
                        {new Array(count).fill(start).map((c, i) => {
                            const curPage: number = i + c
                            const className = ['ivy-pager-item']
                            if (conf.value.current === curPage) {
                                className.push('is-active')
                            }
                            return (
                                <a class={className.join(' ')} onClick={() => handleClick(curPage)}>
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
        }

        return () => {
            return layout.value.map((c) => (layoutMap[c] as Function)())
        }
    }
})
