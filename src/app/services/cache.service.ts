// cache.service.ts
import { Injectable } from '@angular/core';

interface CacheEntry {
  response: any;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
    
  private cache = new Map<string, CacheEntry>();
  private CACHE_DURATION_MS = 60 * 1000; // 1 minute

  constructor() { }

  get(key: string): any | undefined {
    const entry = this.cache.get(key);
    if (!entry) {
      return undefined;
    }
    // Invalidate if expired
    if (Date.now() - entry.timestamp > this.CACHE_DURATION_MS) {
      this.cache.delete(key);
      return undefined;
    }
    return entry.response;
  }

  put(key: string, response: any): void {
    this.cache.set(key, { response, timestamp: Date.now() });
  }

  clear(): void {
    this.cache.clear();
  }
}