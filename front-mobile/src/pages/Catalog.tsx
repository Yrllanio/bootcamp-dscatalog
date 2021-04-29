import React from 'react';
import { Text, View } from 'react-native';
import { ProductCard } from '../components';
import productImg from '../assets/produto.png';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../styles';


const products = [
    {
        id: 1,
        imgUrl: productImg,
        name: "Computador Desktop - Intel core i7",
        price: 1200.0,
    },
    {
        id: 2,
        imgUrl: productImg,
        name: "Computador Desktop - Intel core i7",
        price: 1200.0,
    },
    {
        id: 3,
        imgUrl: productImg,
        name: "Computador Desktop - Intel core i7",
        price: 1200.0,
    },
    {
        id: 4,
        imgUrl: productImg,
        name: "Computador Desktop - Intel core i7",
        price: 1200.0,
    },
    {
        id: 5,
        imgUrl: productImg,
        name: "Computador Desktop - Intel core i7",
        price: 1200.0,
    },
];

const Catalog: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={theme.scrollContainer}>
            {products.map((product) =>(
                <ProductCard {...product} />
                
            ))}
        </ScrollView>
    )
};

export default Catalog;