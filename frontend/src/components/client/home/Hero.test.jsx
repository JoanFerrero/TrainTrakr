import { describe, it, expect,} from 'vitest';
import { screen, render } from '@testing-library/react';
import Hero from './Hero.jsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('Test Component Hero', () => {
  it('renders Hero component with background image and search form', () => {
    render(<BrowserRouter><Hero /></BrowserRouter>);
  
    // Verifica que el contenedor del componente exista
    const heroComponent = screen.getByTestId('hero-component');
    expect(heroComponent).toBeInTheDocument();

    const searchForm = screen.getByTestId('search-form');
    expect(searchForm).toBeInTheDocument();
  });
})