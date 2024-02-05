<script setup lang="ts">
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
        <div>
            <div style="font-size: 16px">
                <span @click="handlerClick('prevYear')">&lt;</span>
                <span @click="handlerClick('prevMonth')">&lt;&lt;</span>
            </div>
            <span>2024-01-31</span>
            <div>
                <span @click="handlerClick('nextMonth')">&gt;</span>
                <ivy-icon name="d-arrow-right" @click="handlerClick('nextYear')"></ivy-icon>
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
