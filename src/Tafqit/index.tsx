import React from 'react';
import getTafqitFormat from '../utilities/getTafqitFormat';

type Props = {
  children: string;
};

const Tafqit = ({ children }: Props) => {
  const tafqitFormat = getTafqitFormat(children);

  return <p data-testid='tafqit-value'>{tafqitFormat}</p>;
};
export default Tafqit;
