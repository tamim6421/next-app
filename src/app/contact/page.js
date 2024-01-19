"use client"

import Menu from '@/components/Menu';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const ContactPage = () => {
    const [data, setData] = useState([])
    useEffect( () =>{
      
       const faceData = async() =>{
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data = await res.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
       }
       faceData()

    } ,[])

    console.log(data)

    return (
        <div className='px-5'>
            <Menu></Menu>
            <h1 className='global-text'>this is contact page {data?.length}</h1>
            <Image src={'/pic2.jpg'} width={600} height={100} style={{ height: "400px" }} alt='image'></Image>

            <div>
                {
                    data?.map((item, i) => <li key={i}>
                        {item.title}
                    </li>)
                }
            </div>
        </div>
    );
};

export default ContactPage;