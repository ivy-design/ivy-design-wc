<script setup lang="ts">
import { ref } from 'vue'
import { TreeItem } from './child'

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
    },
    expandAll: Boolean
})

const keyMap = ref({
    label: props.propLabel,
    children: props.propChildren
}) // key 映射

type DataSources = Array<{
    [key: string]: any
}>

const dataSources = ref<DataSources>([]) // 数据源
const checkedKeys = ref<Array<string | number | Symbol>>([]) // 选中的 key
const expandKeys = ref<Array<string | number | Symbol>>([]) // 展开的 key

const parseData = (data: DataSources) => {
    return data.map((item) => {
        const { [props.propChildren]: children } = item
        if (children) {
            if (expandKeys.value.includes(item[props.nodeKey as string])) {
                item.isOpen = true
            } else {
                item.isOpen = false
            }
            // item.isOpen = false
            item.isLeaf = false
            item.children = parseData(children)
        } else {
            item.isLeaf = true
        }

        return item
    })
}

const setData = (data: DataSources) => {
    dataSources.value = parseData(data)
}

defineExpose({
    setCheckedKeys: (keys: string[]) => {
        console.log(keys)
        checkedKeys.value = keys
    },
    setData,
    setExpandKeys(keys: string[]) {
        expandKeys.value = keys
        setData(dataSources.value)
    }
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
    --ivy-tree-line-height: calc(1.8 * var(--ivy-tree-font-size));
}
.tree {
    font-size: var(--ivy-tree-font-size);
    line-height: var(--ivy-tree-line-height);
    box-sizing: border-box;
    &-item {
        cursor: default;
        box-sizing: border-box;
        &__label {
            display: flex;
            align-items: center;
        }
        &__icon {
            display: flex;
            font-size: var(--ivy-tree-font-size);
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
    transition:
        0.3s height ease-in-out,
        0.3s padding-top ease-in-out,
        0.3s padding-bottom ease-in-out;
}
</style>
