import { describe, it } from 'vitest'
import useIndex from '../useIndex'

describe('utils/index.ts', () => {
    it('test useIndex', ({ expect }) => {
        const { index, generateIndex } = useIndex()
        expect(index.value).toEqual(0)
        generateIndex()
        expect(index.value).toEqual(1)
        generateIndex()
        generateIndex()
        expect(index.value).toEqual(3)
    })
})
