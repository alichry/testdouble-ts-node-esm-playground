import { describe, it } from 'mocha';
import * as td from 'testdouble';
import * as assert from 'node:assert';

describe('Register', function () {
    it('Should mock fs', async function () {
        const fsMock = await td.replaceEsm('fs');
        td.when(fsMock.default.readFileSync('/proc/uptime'))
            .thenReturn('1000');
        
        const register = await import('./register.js');
        assert.equal(register.getSystemUpTime(), '1000');

        td.reset();
    });
})