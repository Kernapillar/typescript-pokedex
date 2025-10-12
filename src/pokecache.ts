

export type CacheEntry<T> = {
    createdAt: number; 
    val: T
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #clearIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startClearLoop(); 
    }

    add<T>(key: string, val: any): void {
        const value = {
            createdAt: Date.now(), 
            val: val
        }
        this.#cache.set(key, value);
    }

    get<T>(key: string):CacheEntry<any> | undefined {
        if (!this.#cache.has(key)) return undefined;
        return this.#cache.get(key);
    }


    #clear(): void {
        for (const [key, value] of this.#cache) {
            const element = value;
            if (element.createdAt > Date.now() - this.#interval) {
                this.#cache.delete(key);
            }
        }
    }

    #startClearLoop(): void {
        this.#clearIntervalId = setInterval(this.#clear, this.#interval);
    }

    stopClearLoop(): void {
        clearInterval(this.#clearIntervalId);
        this.#clearIntervalId = undefined;
    }
    
}