<script setup lang="ts">
import { ArrowLeft, ArrowRight, DArrowLeft, DArrowRight } from '@/utils/icons'

interface Props {
    data: Array<{ value: number; type: string }>
}

const props = defineProps<Props>()

interface Event {
    (e: 'click', type: string, val?: any): void
}

const emit = defineEmits<Event>()

const handlerClick = (type: string, val?: any) => {
    emit('click', type, val)
}
</script>

<template>
    <div class="box">
        <div
            style="
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1;
                padding: 12px 16px;
                gap: 16px;
            "
        >
            <div style="font-size: 16px">
                <DArrowLeft @click="handlerClick('prevYear')" />
                <ArrowLeft @click="handlerClick('prevMonth')" />
            </div>
            <span>2024-01-31</span>
            <div>
                <ArrowRight @click="handlerClick('nextMonth')" />
                <DArrowRight @click="handlerClick('nextYear')" />
            </div>
        </div>
        <ul class="year">
            <li class="year-item">一</li>
            <li class="year-item">二</li>
            <li class="year-item">三</li>
            <li class="year-item">四</li>
            <li class="year-item">五</li>
            <li class="year-item">六</li>
            <li class="year-item">日</li>
            <li
                v-for="(item, i) in props.data"
                :key="i"
                :class="['year-item', `is-${item.type}`]"
                @click="handlerClick('check')"
            >
                <span class="year-item-inner">{{ item.value }}</span>
            </li>
        </ul>
    </div>
</template>
