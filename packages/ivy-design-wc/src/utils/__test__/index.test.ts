import { describe, expect, test } from 'vitest'

import { hasOwn } from '@/utils/index'

describe('utils/index.ts', () => {
    test('hasOwn success', () => {
        expect(hasOwn({ a: 1 }, 'a')).toEqual(true)
    })
    test('hasOwn fail', () => {
        expect(hasOwn({ a: 1 }, 'b')).toEqual(false)
    })

    test('hasOwn extends', () => {
        interface IPerson {
            name: string
            age?: number
        }

        class Person implements IPerson {
            name: string
            age?: number

            constructor() {
                this.name = 'Tom'
            }
        }

        Person.prototype.age = 18
        const Tom: IPerson = new Person()

        expect(hasOwn(Tom, 'age')).toEqual(false)
    })
})
