# Tree 树形控件

## 基础用法

<ivy-tree ref="el1" node-key="id"></ivy-tree>

<script setup>
import { onMounted, ref } from 'vue'

const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
  {
        id: 9,
        label: 'Level two 4',
      },
]

const el1 = ref()
const setElData = (el, data) => {
    el.value.setData(data)
}
onMounted(()=>{
    setElData(el1, data)
})
</script>
