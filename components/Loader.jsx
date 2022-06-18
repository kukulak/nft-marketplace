import React from 'react';
import Image from 'next/image';
import images from '../assets';

const Loader = () => (
  <div className="flexCenter w-full my-4">
    <Image
      src={images.loader}
      width="90"
      height="90"
      objectFit="contain"
      alt="loader"
    />
  </div>
);

export default Loader;
