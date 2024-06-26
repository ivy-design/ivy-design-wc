<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { Prev, Next, Pager } from './components'

defineOptions({
    name: 'Pagination',
    inheritAttrs: false
})

interface Conf {
    offset: number
    limit: number
    sizes?: number[]
    total: number
    maxOffset: number
    pagerCount: number
}

interface Props {
    current: string
    size: string
    sizes: string
    total: string
    layout: string
    pagerCount: string
    prevText: string
    nextText: string
    background: boolean
}
const props = withDefaults(defineProps<Props>(), {
    current: '1',
    size: '10',
    sizes: '',
    total: '0',
    layout: 'prev,pager,next',
    pagerCount: '7'
})

const emit = defineEmits(['current-change', 'size-change', 'prev-page', 'next-page'])

const conf = reactive<Conf>({
    limit: 10,
    offset: 1,
    total: 0,
    maxOffset: 0,
    pagerCount: 7
})
const pageList = ref<Array<any>>([])

// maxOffset > pagerCount
const genPageListWithEllipsis = () => {
    const target = []

    const diff = conf.pagerCount - 2
    const midden = Math.floor(diff / 2)

    if (conf.offset >= diff) {
        target.push({ value: 0, status: 'prev' })
        let start = conf.offset - midden
        let end = conf.offset
        if (conf.offset + midden < conf.maxOffset) {
            end = conf.offset + midden
            for (let i = start; i <= end; i++) {
                target.push({ value: i, status: 'page' })
            }
            target.push({ value: 0, status: 'next' })
        } else {
            start = conf.maxOffset - diff
            end = conf.maxOffset - 1
            for (let i = start; i <= end; i++) {
                target.push({ value: i, status: 'page' })
            }
        }
    } else {
        const end = conf.pagerCount - 1
        for (let i = 2; i < end; i++) {
            target.push({ value: i, status: 'page' })
        }
        target.push({ value: 0, status: 'next' })
    }

    pageList.value = [
        { value: 1, status: 'page' },
        ...target,
        { value: conf.maxOffset, status: 'page' }
    ]
}
const genPageListWithoutEllipsis = () => {
    const target = []
    for (let i = 1; i <= conf.maxOffset; i++) {
        target.push({ value: i, status: 'page' })
    }
    pageList.value = target
}
const genPageList = () => {
    if (conf.maxOffset > conf.pagerCount) {
        genPageListWithEllipsis()
    } else {
        genPageListWithoutEllipsis()
    }
}

const handlePrevPage = () => {
    if (conf.offset === 1) return
    conf.offset = conf.offset - 1
    genPageList()
    emit('prev-page', conf.offset)
}

const handleNextPage = () => {
    if (conf.offset === conf.maxOffset) return
    conf.offset = conf.offset + 1
    genPageList()
    emit('next-page', conf.offset)
}

const handleClick = (offset: any, status: string) => {
    const diff = conf.pagerCount - 2
    if (status === 'prev') {
        conf.offset = conf.offset - diff
    } else if (status === 'next') {
        conf.offset = conf.offset + diff
    } else {
        if (offset === conf.offset) return
        conf.offset = offset
    }
    genPageList()
    emit('current-change', conf.offset)
}

onMounted(() => {
    conf.offset = parseInt(props.current)
    conf.limit = parseInt(props.size)
    conf.total = parseInt(props.total)
    conf.pagerCount = parseInt(props.pagerCount)
    conf.maxOffset = Math.ceil(conf.total / conf.limit)

    genPageList()
})
</script>

<template>
    <div :class="['ivy-pagination', { 'is-background': props.background }]">
        <Prev
            class="ivy-pagination-prev"
            :text="props.prevText"
            :disabled="conf.offset === 1"
            @click="handlePrevPage"
        />
        <Pager :data="pageList" :current="conf.offset" @click="handleClick" />
        <Next
            class="ivy-pagination-next"
            :text="props.nextText"
            :disabled="conf.offset === conf.maxOffset"
            @click="handleNextPage"
        />
    </div>
</template>

<style lang="scss">
:host {
    --ivy-pagination-color: var(--ivy-text-color, #303133);
    --ivy-pagination-font-size: var(--ivy-font-size, 14px);
    --ivy-pagination-background-color: var(--ivy-color-white, #fff);
    --ivy-pagination-disabled-color: #c0c4cc;
    --ivy-pagination-disabled-background-color: #f5f7fa;
    --ivy-pagination-hover-color: var(--ivy-color-primary, #409eff);
    display: flex;
    align-items: center;
}
.ivy-pagination {
    display: flex;
    align-items: center;
    font-size: var(--ivy-pagination-font-size);
    color: var(--ivy-pagination-color);
    &-wrap {
        display: inline-flex;
        list-style: none;
        margin: 0 8px;
        padding: 0;
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
        background-color: var(--ivy-pagination-background-color);
        &:hover {
            --ivy-pagination-background-color: #f5f7fa;
        }
        &.is-active {
            cursor: default;
            color: var(--ivy-pagination-hover-color);
        }

        &.is-prev,
        &.is-next {
            position: relative;
            & svg {
                display: none;
            }
        }
        &.is-prev {
            & .more {
                display: initial;
            }
            &:hover {
                & .more {
                    display: none;
                }
                & .arrow {
                    display: initial;
                }
            }
        }
        &.is-next {
            & .more {
                display: initial;
            }
            &:hover {
                &:hover {
                    & .more {
                        display: none;
                    }
                    & .arrow {
                        display: initial;
                    }
                }
            }
        }
    }
    &-prev,
    &-next {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        &:hover {
            color: var(--ivy-pagination-hover-color);
        }
        &.is-disabled {
            cursor: not-allowed;
            color: var(--ivy-pagination-disabled-color);
        }
    }
}

.ivy-pagination.is-background {
    --ivy-pagination-background-color: #f5f7fa;
    .ivy-pagination-item {
        &:hover {
            color: white;
            --ivy-pagination-background-color: var(--ivy-pagination-hover-color);
        }
    }
}
</style>
