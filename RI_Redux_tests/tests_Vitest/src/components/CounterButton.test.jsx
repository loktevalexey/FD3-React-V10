import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import CounterButton from './CounterButton';

describe('CounterButton', () => {
  it('обновляет текст кнопки после нажатий', () => {
    render(<CounterButton />);

    const buttonElem = screen.getByDisplayValue('нажатий: 0, степень двойки: 1');
    expect(buttonElem.value).toBe('нажатий: 0, степень двойки: 1');

    fireEvent.click(buttonElem);
    expect(buttonElem.value).toBe('нажатий: 1, степень двойки: 2');

    fireEvent.click(buttonElem);
    expect(buttonElem.value).toBe('нажатий: 2, степень двойки: 4');
  });
});
