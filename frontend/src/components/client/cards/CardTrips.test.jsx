// CardTrips.test.js

import React from 'react';
import { expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import CardTrips from './CardTrips';
import { StationsProvider } from '../../../context/stations/StationsProvider';

const mockNavigate = vi.fn();

vi.mock('../../../hooks/useTrips', () => ({
  useTrips: vi.fn(() => ({
    useSetStations: vi.fn(),
    exit: { name: 'Exit Station' },
    arrival: { name: 'Arrival Station' }
  })),
}));

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const trip = {
  id: 'trip_id',
  date: '2024-03-13',
  time: '3',
  exit_station_id: '1',
  arrival_station_id: '2',
};

const renderice = () => {
  render(
    <StationsProvider>
      <CardTrips trip={trip} />
    </StationsProvider>
  );
}
describe('CardStations component', () => {
  it('renders trip date, stations, and duration correctly', () => {
    renderice()

    // Assert that the trip date, stations, and duration are rendered correctly
    expect(screen.getByText(trip.date)).toBeInTheDocument();
    expect(screen.getByText('Exit Station - Arrival Station')).toBeInTheDocument();
    expect(screen.getByText(`Duracion ${trip.time} h`)).toBeInTheDocument();
  });

  it('clicking "Saber mas" calls useNavigate with correct path', () => {
    renderice()

    fireEvent.click(screen.getByText('Saber mas'));

    expect(mockNavigate).toHaveBeenCalledWith('/trips/' + trip.id);
  });
});