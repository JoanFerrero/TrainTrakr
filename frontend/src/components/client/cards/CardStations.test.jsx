
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardStations from './CardStations';

const mockUseChangeFiler = vi.fn();
const mockNavigate = vi.fn();

vi.mock('../../../hooks/useContextHook', () => ({
  useContextHook: () => ({
    useChangeFiler: mockUseChangeFiler,
  }),
}));

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const station = {
  id: 'station_id',
  name: 'Station Name',
  desc: 'Station Description',
};

describe('CardStations component', () => {
  it('renders station name and description correctly', () => {
    render(
      <CardStations station={station} />
    );

    // Assert that the station name and description are rendered correctly
    expect(screen.getByText(station.name)).toBeInTheDocument();
    expect(screen.getByText(station.desc)).toBeInTheDocument();
  });

  it('calls useChangeFiler and navigates to /trips when "Ver Estacion" is clicked', () => {
    render(
      <CardStations station={station} />
    );

    // Simulate click on "Ver Estacion"
    fireEvent.click(screen.getByText('Ver Estacion'));

    // Assert that useChangeFiler is called with correct arguments
    expect(mockUseChangeFiler).toHaveBeenCalledWith(station.id);

    // Assert that navigation occurs to /trips
    expect(mockNavigate).toHaveBeenCalledWith('/trips');
  });
});