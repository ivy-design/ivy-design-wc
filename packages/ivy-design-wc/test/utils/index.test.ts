import { describe, expect, test } from 'vitest'

import { hasOwn } from '@/utils/index'

describe('utils/index.ts', () => {
    test('hasOwn success', () => {
        expect(hasOwn({ a: 1 }, 'a')).toEqual(true)
    })
    test('hasOwn fail', () => {
        expect(hasOwn({ a: 1 }, 'b')).toEqual(false)
    })

    test('hasOwn success', () => {
        function Person() {
            this.a = 1
            this.b = 2
        }
        Person.prototype.c = 3
        const target = new Person()

        expect(hasOwn(target, 'c')).toEqual(false)
    })
})
