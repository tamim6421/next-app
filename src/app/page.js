import Image from 'next/image';
import React from 'react';
import styles from './page.module.css'
import Menu from '@/components/Menu';


const HomePage = () => {
  return (
    <div className='px-20'>
      <Menu></Menu>
      <h1 className={styles.myColor}>
        this is my home page 
      </h1>
      <div className='h-10'>
        {/* <img src='/pic1.jpg' alt='images'></img> */}
        <Image src={'/pic2.jpg'} width={600} height={100} style={{ height: "400px" }} alt='image'></Image>
      </div>
    </div>
  );
};

export default HomePage;