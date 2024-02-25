/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';
import '@testing-library/jest-dom'

test('renders homepage content', () => {
  render(<HomePage />);

  const heading = screen.getByText('Welcome to Our E-Commerce App');
  const paragraph = screen.getByText('This is the place to find all your needs at one click.');

  expect(heading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});