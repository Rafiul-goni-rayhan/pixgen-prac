import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async () => {
    const res=await fetch('https://pixgen-prac-mrm5.vercel.app/category.json')
    const categories=await res.json();
    return (
        <div className="flex flex-row items-center gap-3 mb-3">
            {
                categories.map((category)=>(
                   
                    // <Button size="sm"  key={category.id} >
                    //     {category.name}
                    // </Button>
                    
                     <Link href={`?category=${category.name.toLowerCase()}`} key={category.id}>
                        <Button size="sm"  key={category.id} >
                            {category.name}
                        </Button>
                    </Link>
                ))
            }
            
        </div>
    );
};

export default Category;