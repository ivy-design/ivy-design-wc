import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import row from './row.ce.vue'
import col from './col.ce.vue'

const Row = defineCustomElement(row)
const registerRowComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${row.name}`
    install(key, row)
}

const Col = defineCustomElement(col)
const registerColComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${col.name}`
    install(key, col)
}

export { Row, registerRowComponent, Col, registerColComponent }

export default (prefix = 'Ivy') => {
    registerRowComponent(prefix)
    registerColComponent(prefix)
}
