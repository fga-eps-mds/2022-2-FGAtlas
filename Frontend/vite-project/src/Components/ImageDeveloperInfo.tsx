import React from 'react';

import Styles from './DevelopersInfo/styleds/styles';
interface ImageProps {
  img: any,
};
const Image: React.FC<ImageProps> = ({
  img
}) => <Styles.Image img={img}></Styles.Image>;

export default Image;