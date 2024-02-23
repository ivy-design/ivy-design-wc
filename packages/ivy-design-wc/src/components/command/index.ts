import { defineCustomElement } from 'vue'
import { install } from '@/utils/index'
import index from './src/index.vue'
import item from './src/item.vue'
import group from './src/group.vue'
import separator from './src/separator.vue'
import dialog from './src/dialog.vue'
import list from './src/list.vue'

const Command = defineCustomElement(index)
const registerCommandComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${index.name}`
    install(key, index)
}

const CommandItem = defineCustomElement(item)
const registerCommandItemComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${item.name}`
    install(key, item)
}

const CommandGroup = defineCustomElement(group)
const registerCommandGroupComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${group.name}`
    install(key, group)
}

const CommandSeparator = defineCustomElement(separator)
const registerCommandSeparatorComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${separator.name}`
    install(key, separator)
}

const CommandDialog = defineCustomElement(dialog)
const registerCommandDialogComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${dialog.name}`
    install(key, dialog)
}

const CommandList = defineCustomElement(list)
const registerCommandListComponent = (prefix = 'Ivy') => {
    const key = `${prefix}${list.name}`
    install(key, list)
}

export {
    Command,
    registerCommandComponent,
    CommandItem,
    registerCommandItemComponent,
    CommandGroup,
    registerCommandGroupComponent,
    CommandSeparator,
    registerCommandSeparatorComponent,
    CommandDialog,
    registerCommandDialogComponent,
    CommandList,
    registerCommandListComponent
}

export default (prefix = 'Ivy') => {
    registerCommandComponent(prefix)
    registerCommandItemComponent(prefix)
    registerCommandGroupComponent(prefix)
    registerCommandSeparatorComponent(prefix)
    registerCommandDialogComponent(prefix)
    registerCommandListComponent(prefix)
}
