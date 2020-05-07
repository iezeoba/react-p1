import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import IfeanyiComp from './IfeanyiComp';

test('test the IfeanyiComp', async () => {
  const myCountFunc = jest.fn();
  render(<IfeanyiComp countFunc = {myCountFunc}></IfeanyiComp>);
  //screen.debug();
  const el = screen.getByText(/Ifeanyi/i);

  click(/Ifeanyi/i);
  click(/Ifeanyi/i);
  //fireEvent.click(el);
  console.log(myCountFunc.mock.calls.length);
});

function click(txt) {
  fireEvent.click(
    screen.getByText(txt)
  );
}
