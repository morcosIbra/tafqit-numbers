import * as React from 'react';
import { render } from '@testing-library/react';
import Tafqit from '../src';

describe('Tafqit test cases', () => {
  it('check format of "234"', () => {
    const { getByTestId } = render(<Tafqit>234</Tafqit>);
    const tafqitValue = getByTestId('tafqit-value');
    expect(tafqitValue.textContent).toEqual('فقط مئتان وأربعة وثلاثون جنيه مصري لا غير');
  });
});
