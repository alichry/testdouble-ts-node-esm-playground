import { list } from './ps.js';

export const getTotalMemoryAllocated = () => {
    return list()
        .reduce((p: number, c) => p + c.allocatedMemory, 0)
}