import * as React from 'react';
import { render } from '@testing-library/react';
import Tafqit from '../src';

describe('Tafqit test cases', () => {
  it('check format of "234"', () => {
    const { getByTestId } = render(<Tafqit>234</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط مئتان وأربعة وثلاثون جنيه مصري لا غير');
  });

  it('check format of zero value', () => {
    const { getByTestId } = render(<Tafqit>0</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('');
  });

  it('check format of negative numbers value', () => {
    const { getByTestId } = render(<Tafqit>-20</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('');
  });

  it('check format of "90091212"', () => {
    const { getByTestId } = render(<Tafqit>90091212</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط تسعون مليون وواحد وتسعون الف ومئتان واثنا وعشر  جنيه مصري لا غير');
  });
});
