export function createId(prefix = 'army'): string {
    // Simple, portable (node/browser)
    return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  }
  