import { describe, it, expect,} from 'vitest';
import { screen, waitFor, act, render } from '@testing-library/react';
import Hero from './Hero.jsx';
import React from 'react';

describe('Test Component Hero', () => {
  it('renders Hero component with background image and search form', () => {
    render(<Hero />);
  
    // Verifica que el contenedor del componente exista
    const heroComponent = screen.getByTestId('hero-component');
    expect(heroComponent).toBeInTheDocument();

    // Verifica que el fondo de imagen sea el esperado
    const backgroundImage = heroComponent.style.backgroundImage;
    expect(backgroundImage).toContain('1200x675_cmsv2_04451bf2-041e-5cc8-9331-93c0362b3244-7454006.webp');

    // Verifica que el formulario de búsqueda esté presente
    const searchForm = screen.getByTestId('search-form');
    expect(searchForm).toBeInTheDocument();
  });
})