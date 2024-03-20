import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from './SearchForm';


describe('SearchForm component', () => {
  it('renders SearchForm component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>
    );

    const searchButton = getByText('Buscar viajes');
    expect(searchButton).toBeInTheDocument();
  });

  it('clicking search button navigates to /trips', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>
    );

    const searchButton = getByText('Buscar viajes');
    fireEvent.click(searchButton);

    expect(window.location.pathname).toBe('/trips');
  });
});