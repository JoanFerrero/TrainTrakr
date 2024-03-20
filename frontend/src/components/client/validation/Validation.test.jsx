import React from 'react';
import { render, screen } from '@testing-library/react';
import Validation from './Validation';

describe('Validation component', () => {
  it('renders green background if trip date is in the future', () => {
    const rent = {
      trip: {
        date: '08/11/2030' // Future date
      }
    };

    render(<Validation rent={rent} />);
    const validationContainer = screen.queryByTestId('color');
    
    expect(validationContainer).toHaveClass('bg-green-500');
  });

  it('renders red background if trip date is in the past', () => {
    const rent = {
      trip: {
        date: '01/01/2020' // Past date
      }
    };

    render(<Validation rent={rent} />);
    const validationContainer = screen.queryByTestId('color');
    
    expect(validationContainer).toHaveClass('bg-red-500');
  });
});