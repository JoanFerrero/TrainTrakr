import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import CardChairs from './CardChairs';

describe('CardChairs component', () => {
  it('calls setChairSelected when clicked', () => {
    const setChairSelected = vi.fn();
    const chair = { type: 'Sample Chair Type' };
    const trip = { arrival_station: { name: 'Sample Station' }, date: '2024-03-19' };
    
    const container = render(<CardChairs chair={chair} setChairSelected={setChairSelected} trip={trip} />);
    
    const reservationSpan = container.queryByTestId('spanButton');

    fireEvent.click(reservationSpan);
        
    expect(setChairSelected).toHaveBeenCalledTimes(1);
  });
});