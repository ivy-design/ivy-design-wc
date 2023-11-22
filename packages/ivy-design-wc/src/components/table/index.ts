import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import comp from './index.ce.vue'
import columnCeVue from './column.ce.vue'

const Table = defineCustomElement(comp)
const registerTableComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${comp.name}`
    install(key, comp)
}

const TableColumn = defineCustomElement(columnCeVue)
const registerTableColumnComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${columnCeVue.name}`
    install(key, columnCeVue)
}

export { Table, registerTableComponent, TableColumn, registerTableColumnComponent }

export default () => {
    registerTableComponent()
    registerTableColumnComponent()
}
