import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { InputNumber } from './InputNumber';

describe('InputNumber', () => {
  it('изменяет число и связанную степень двойки', () => {
    render(<InputNumber />);

    const inputElem = screen.getByTestId('inp');
    expect(inputElem.value).toBe('0');
    expect(screen.getByText('число: 0, степень двойки: 1')).toBeTruthy();

    fireEvent.change(inputElem, { target: { value: '5' } });

    expect(inputElem.value).toBe('5');
    expect(screen.getByText('число: 5, степень двойки: 32')).toBeTruthy();
  });
});
