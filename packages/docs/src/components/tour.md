# Tour 漫游式引导

## 基础用法

<ivy-button @click="handleOpen">打开引导</ivy-button>

---

<ivy-space>
    <ivy-button class="a1">上传</ivy-button>
    <ivy-button class="a2" type="primary">保存</ivy-button>
    <ivy-button class="a3">...</ivy-button>
</ivy-space>

<ivy-tour :steps.prop="steps" ref="targetEl">
    <ivy-tour-step></ivy-tour-step>
</ivy-tour>

<script setup>
import { ref } from 'vue'

const steps = ref([
    {
        target: '.a1',
        title: '第一步',
        content: "这是提示的第一个"
    },
    {
        target: '.a2',
        title: '第二步',
        content: "这是提示的第一个",
        placement: 'bottom'
    },
    {
        target: '.a3',
        title: '最后',
        content: "这是提示的第一个"
    }
])
const targetEl = ref()
const handleOpen = () => {
    targetEl.value.open()
}
</script>
