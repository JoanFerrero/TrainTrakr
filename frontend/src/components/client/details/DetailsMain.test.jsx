import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailsMain from './DetailsMain';

vi.mock('../../../hooks/useRent', () => ({
  useRent: () => ({
    useCreateRent: vi.fn()
  })
}));

describe('CardChairs component', () => {
  it('renders DetailsMain component', () => {
    const trip = {
      exit_station: { name: 'Estación de salida' },
      arrival_station: { name: 'Estación de llegada' },
      time: 3,
      chairs: [
        { slug: 'chair-1', status: 'activo', type: 'premium' },
        { slug: 'chair-2', status: 'activo', type: 'medio' },
        { slug: 'chair-3', status: 'activo', type: 'basico' }
      ],
      date: '2024-03-20'
    };
  
    const { getByText } = render(
      <BrowserRouter>
        <DetailsMain trip={trip} />
      </BrowserRouter>
    );
  
    expect(getByText('Salida: Estación de salida')).toBeInTheDocument();
    expect(getByText('LLegada: Estación de llegada')).toBeInTheDocument();
    expect(getByText('Duracion: 3 h')).toBeInTheDocument();
  });
});