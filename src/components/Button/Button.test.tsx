import React from 'react';
import { render, fireEvent } from '../../test-utils';
import Button from './';

test('renders a button', () => {
    const { getByRole } = render(<Button />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
});

test('is enabled by default', () => {
    const { getByRole } = render(<Button />);
    const button = getByRole('button');
    expect(button).not.toHaveAttribute('disabled');
});

test('disabled when disabled prop passed', () => {
    const { getByRole } = render(<Button disabled />);
    const button = getByRole('button');
    expect(button).toHaveAttribute('disabled');
});

test('fires click handler when passed', () => {
    const clickHandler = jest.fn();
    const { getByRole } = render(<Button onClick={ clickHandler } />);
    fireEvent.click(getByRole('button'))
    expect(clickHandler).toHaveBeenCalled();    
})
