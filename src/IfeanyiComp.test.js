import React from 'react';
import { fireEvent, render, screen,  } from '@testing-library/react';
import IfeanyiComp from './IfeanyiComp';

test('test the IfeanyiComp', async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
