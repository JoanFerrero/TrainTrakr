import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import CardChairs from './CardChairs';

describe('CardChairs component', () => {

  const chair = {
    type: 'Example Chair Type',
    slug: 'example-chair-slug'
  };

  const trip = {
    arrival_station: { name: 'Example Station' },
    date: '2024-03-25'
  };

  it('renders component with correct chair details', () => {
    const { getByText } = render(
      <CardChairs chair={chair} trip={trip} chairS={chair}/>
    );

    expect(getByText(`Viaje a ${trip.arrival_station.name}`)).toBeInTheDocument();
    expect(getByText(`Fecha: ${trip.date}`)).toBeInTheDocument();
    expect(getByText(`Categoria silla: ${chair.type}`)).toBeInTheDocument();
  });

  it('clicking on the span button should trigger setChairSelected with correct chair', () => {
    const setChairSelected = vi.fn();
    const { getByTestId } = render(
      <CardChairs chair={chair} trip={trip} setChairSelected={setChairSelected} chairS={chair} />
    );

    const spanButton = getByTestId('spanButton');
    fireEvent.click(spanButton);

    expect(setChairSelected).toHaveBeenCalledWith(chair);
  });
});