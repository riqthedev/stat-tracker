import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import CreateGame from './routes/CreateTeam';

test('renders learn react link', () => {
  render(<CreateGame/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
