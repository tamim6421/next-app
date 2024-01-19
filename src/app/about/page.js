
import Menu from '@/components/Menu';
import Image from 'next/image';
import React from 'react';



async function getData () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const json  = await res.json()
    return json
}

const aboutPage = async () => {
    const data = await getData()
    console.log(data)
    return (
        <div>
           <Menu></Menu>
           <div>
           <h1 >This is about page {data?.length} </h1>
            <Image src={'/pic2.jpg'} width={600} height={100} style={{ height: "400px" }} alt='image'></Image>

            <div>
                {
                    data?.map((item, i) => <li key={i}>
                        {item.title}
                    </li>)
                }
            </div>
           </div>
          
        </div>
    );
};

export default aboutPage;