import { describe, expect, test } from 'vitest'

import { getType } from '@/utils/utils'

describe('utils/utils.ts', () => {
    test('type number success', () => {
        expect(getType(123)).toEqual('number')
    })
    test('NaN is number', () => {
        expect(getType(NaN)).toEqual('number')
    })
    test('type string success', () => {
        expect(getType(123)).toEqual('number')
    })
    test('type boolean success', () => {
        expect(getType(123)).toEqual('number')
    })
    test('type object success', () => {
        expect(getType({})).toEqual('object')
    })
    test('type array success', () => {
        expect(getType([])).toEqual('array')
    })
    test('type function success', () => {
        expect(getType(() => {})).toEqual('function')
    })
    test('type null success', () => {
        expect(getType(null)).toEqual('null')
    })
    test('type undefined success', () => {
        expect(getType(undefined)).toEqual('undefined')
    })
    test('type symbol success', () => {
        expect(getType(Symbol())).toEqual('symbol')
    })
    test('type bigint success', () => {
        expect(getType(BigInt(123))).toEqual('bigint')
    })
    test('type date success', () => {
        expect(getType(new Date())).toEqual('date')
    })
    test('type regexp success', () => {
        expect(getType(new RegExp(''))).toEqual('regexp')
    })
    test('type error success', () => {
        expect(getType(new Error())).toEqual('error')
    })
    test('type math success', () => {
        expect(getType(Math)).toEqual('math')
    })
    test('type json success', () => {
        expect(getType(JSON)).toEqual('json')
    })
    test('type map success', () => {
        expect(getType(new Map())).toEqual('map')
    })
    test('type set success', () => {
        expect(getType(new Set())).toEqual('set')
    })
    test('type weakmap success', () => {
        expect(getType(new WeakMap())).toEqual('weakmap')
    })
    test('type weakset success', () => {
        expect(getType(new WeakSet())).toEqual('weakset')
    })
})
