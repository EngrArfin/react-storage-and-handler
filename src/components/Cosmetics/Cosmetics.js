import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    
    useEffect(() =>{        
        fetch=('data.json')
        .then(res=> res.json())
        .then(data => setCosmetics)
    },[])

    return (
        <div>
            <h1>Welcome Store </h1>
            {
                cosmetics.map(cosmetics => <Cosmetic
                key={cosmetic.id}
                cosmetic ={cosmetic}
                ></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmetics;