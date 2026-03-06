import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Alias jest to vi for backward compatibility with existing test files
(globalThis as any).jest = vi;
