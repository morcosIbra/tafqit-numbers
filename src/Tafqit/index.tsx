import React from 'react';
import getTafqitFormat from '../utilities/getTafqitFormat';

type Props = {
  children: number | string;
};

const Tafqit = ({ children }: Props) => {
  const tafqitFormat = getTafqitFormat(children);
  return <p>{tafqitFormat}</p>;
};
export default Tafqit;
