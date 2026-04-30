import { describe, expect, it } from 'vitest';

import {power2} from './power2';

describe('power2', () => {
  it('проверка возведения 2 в разные степени', () => {

    expect(power2(3)).toBe(8);

    expect(power2(6)).toBe(64);

    expect(power2(10)).toBe(1024);

  });
});
