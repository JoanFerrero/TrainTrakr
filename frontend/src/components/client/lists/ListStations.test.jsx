import React from 'react';
import { render } from '@testing-library/react';
import { StationsProvider } from '../../../context/stations/StationsProvider';
import ListStations from './ListStations';

describe('ListStations component', () => {
  it('renders ListStations component with no stations', () => {
    const { getByText } = render(
      <StationsProvider>
        <ListStations itemsPag={1}/>
      </StationsProvider>
    );
    const noStationsMessage = getByText('No existen Estaciones');
    expect(noStationsMessage).toBeInTheDocument();
  });
})