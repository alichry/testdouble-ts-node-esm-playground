import { describe, it } from 'mocha';
import * as td from 'testdouble';
import * as assert from 'node:assert';

describe('Memory', function () {
    it('Should mock ps', async function () {
        const psMock = await td.replaceEsm('./ps.js');
        td.when(psMock.list())
            .thenReturn([
                {
                    pid: 2,
                    allocatedMemory: 100
                },
                {
                    pid: 3,
                    allocatedMemory: 600
                }
            ]);
        
        const memory = await import('./memory.js');
        assert.equal(memory.getTotalMemoryAllocated(), 700);

        td.reset();
    });
})