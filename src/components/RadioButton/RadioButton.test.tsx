import React from 'react';
import { render, fireEvent } from '../../test-utils';
import RadioButton from './';

test('renders a button', () => {
    const { getByTestId } = render(<RadioButton value="Test" checked={ false } onChange={ () => {} }/>);
    const button = getByTestId('radio-button');
    expect(button).toBeInTheDocument();
});

test('is enabled by default', () => {
    const { getByTestId } = render(<RadioButton value="Test" checked={ false } onChange={ () => {} }/>);
    const button = getByTestId('radio-button');
    expect(button).not.toHaveAttribute('disabled');
});

test('disabled when disabled prop passed', () => {
    const { getByTestId } = render(<RadioButton value="Test" checked={ false } disabled onChange={ () => {} }/>);
    const button = getByTestId('radio-button');
    expect(button).toHaveAttribute('disabled');
});

test('fires change handler when clicked', () => {
    const changeHandler = jest.fn();
    const { getByTestId } = render(<RadioButton value="Test" checked={ false } onChange={ changeHandler }/>);
    const button = getByTestId('radio-button');
    fireEvent.click(button)
    expect(changeHandler).toHaveBeenCalled();
})
