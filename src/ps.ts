interface Process {
    pid: number;
    allocatedMemory: number;
}

export const list = (): Process[] => {
    return [
        {
            pid: 1000,
            allocatedMemory: 2000
        },
        {
            pid: 1000,
            allocatedMemory: 8000
        }
    ];
}