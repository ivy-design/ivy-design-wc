<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TreeItem } from './child'
import useExpose from '@/hooks/useExpose'

defineOptions({
    name: 'Tree',
    inheritAttrs: false
})

const props = defineProps({
    nodeKey: String,
    propLabel: {
        type: String,
        default: 'label'
    },
    propChildren: {
        type: String,
        default: 'children'
    }
})

const keyMap = ref({
    label: props.propLabel,
    children: props.propChildren
}) // key 映射

type DataSources = Array<{
    [key: string]: any
}>

const dataSources = ref<DataSources>([]) // 数据源
// const checkedKeys = ref([]) // 选中的 key

const parseData = (data: DataSources) => {
    return data.map((item) => {
        const { [props.propChildren]: children } = item
        if (children) {
            item.isOpen = false
            item.isLeaf = false
            item.children = parseData(children)
        } else {
            item.isLeaf = true
        }

        return item
    })
}

const { setExposes } = useExpose()
onMounted(() => {
    setExposes({
        setCheckedKeys: (keys: string[]) => {
            console.log(keys)
        },
        setData(data: DataSources) {
            dataSources.value = parseData(data)
        }
    })
})
</script>

<template>
    <div class="tree">
        <template
            v-for="(item, index) in dataSources"
            :key="props.nodeKey ? item[props.nodeKey] : index"
        >
            <TreeItem :data="item" :props="keyMap" />
        </template>
    </div>
</template>

<style lang="scss">
:host {
    display: block;
    --ivy-tree-font-size: 14px;
    --ivy-tree-line-height: 1.5;
}
.tree {
    font-size: var(--ivy-tree-font-size);
    line-height: var(--ivy-tree-line-height);
    &-item {
        cursor: default;
        &__label {
            display: flex;
            align-items: center;
        }
        &__icon {
            display: inline-flex;
            font-size: 14px;
            width: 1em;
            height: 1em;
            transition: transform 0.3s;
        }
        &__children {
            padding-left: 20px;
            box-sizing: border-box;
        }
    }
}

.collapse-transition {
    transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
        0.3s padding-bottom ease-in-out;
}
</style>
