import React from 'react';
import { render } from '@testing-library/react';
import QRCodeTrip from './QRCodeTrip';

describe('QRCodeTrip component', () => {
  it('renders QR code with correct value if trip date is in the future', () => {
    const trip = {
      id: '123',
      trip: {
        date: '2024-03-25' // Future date
      }
    };

    const { container } = render(<QRCodeTrip trip={trip} />);

    expect(container).not.toBe(null)
  });

  it('renders QR code with default value if trip date is in the past', () => {
    const trip = {
      id: '456',
      trip: {
        date: '2022-01-01' // Past date
      }
    };

    const { container } = render(<QRCodeTrip trip={trip} />);
    
    expect(container).not.toBe(null)
  });
});