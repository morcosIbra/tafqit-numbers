import * as React from 'react';
import { render } from '@testing-library/react';
import Tafqit from '../src';

describe('Tafqit test cases', () => {
  it('check format of negative numbers', () => {
    const { getByTestId } = render(<Tafqit>-20</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('');
  });

  it('check format of zero value', () => {
    const { getByTestId } = render(<Tafqit>0</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('');
  });

  it('check format of "100"', () => {
    const { getByTestId } = render(<Tafqit>100</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط مائة جنيه مصري لا غير');
  });

  it('check format of "234"', () => {
    const { getByTestId } = render(<Tafqit>234</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط مئتان وأربعة وثلاثون جنيه مصري لا غير');
  });

  it('check format of "23980"', () => {
    const { getByTestId } = render(<Tafqit>23980</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط ثلاثة وعشرون الف وتسعمائة وثمانون جنيه مصري لا غير');
  });

  it('check format of "310005"', () => {
    const { getByTestId } = render(<Tafqit>310005</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط ثلاثمائة وعشرة الاف وخمسة جنيهات مصرية لا غير');
  });

  it('check format of "2209000"', () => {
    const { getByTestId } = render(<Tafqit>2209000</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط مليونان ومئتان وتسعة الاف جنيه مصري لا غير');
  });

  it('check format of "90091212"', () => {
    const { getByTestId } = render(<Tafqit>90091212</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط تسعون مليون وواحد وتسعون الف ومئتان واثنا عشر جنيه مصري لا غير');
  });
});
