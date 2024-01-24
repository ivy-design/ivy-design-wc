<script setup lang="ts">
import { onMounted, ref } from 'vue'

// interface Props {}
// const props = withDefaults(defineProps<Props>(), {
//     // default props
// })

const emit = defineEmits(['change'])

const hourList = Array.from({ length: 24 }, (_, i) => (i < 10 ? `0${i}` : `${i}`))
const minuteList = Array.from({ length: 60 }, (_, i) => (i < 10 ? `0${i}` : `${i}`))
const secondList = Array.from({ length: 60 }, (_, i) => (i < 10 ? `0${i}` : `${i}`))

const curHour = ref<string | number | null>(null)
const curMinute = ref<string | number | null>(null)
const curSecond = ref<string | number | null>(null)

const handleChange = (value: string, type: string) => {
    if (type === 'hour') {
        curHour.value = value
    } else if (type === 'minute') {
        curMinute.value = value
    } else if (type === 'second') {
        curSecond.value = value
    }
    emit('change', {
        hour: curHour.value,
        minute: curMinute.value,
        second: curSecond.value
    })
}

onMounted(() => {
    // mounted
})
</script>

<template>
    <div class="pane">
        <ivy-scrollbar class="pane-list">
            <div
                v-for="hour in hourList"
                :key="hour"
                :class="['item', { 'item-checked': curHour === hour }]"
                @click="handleChange(hour, 'hour')"
            >
                {{ hour }}
            </div>
        </ivy-scrollbar>
        <ivy-scrollbar class="pane-list">
            <div
                v-for="minute in minuteList"
                :key="minute"
                :class="['item', { 'item-checked': curMinute === minute }]"
                @click="handleChange(minute, 'minute')"
            >
                {{ minute }}
            </div>
        </ivy-scrollbar>
        <ivy-scrollbar class="pane-list">
            <div
                v-for="second in secondList"
                :key="second"
                :class="['item', { 'item-checked': curSecond === second }]"
                @click="handleChange(second, 'second')"
            >
                {{ second }}
            </div>
        </ivy-scrollbar>
    </div>
</template>
