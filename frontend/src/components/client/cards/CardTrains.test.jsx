// CardTrains.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import CardTrains from './CardTrains';

const train = {
  name: 'Train Name',
  desc: 'Train Description',
};

test('renders train name and description correctly', () => {
  render(<CardTrains train={train} />);

  // Assert that the train name and description are rendered correctly
  expect(screen.getByText(train.name)).toBeInTheDocument();
  expect(screen.getByText(train.desc)).toBeInTheDocument();
});