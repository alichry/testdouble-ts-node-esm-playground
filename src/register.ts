import { readFileSync } from 'fs';

export const getSystemUpTime = (): string => {
    return readFileSync('/proc/uptime').toString();
}