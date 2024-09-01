import React, { useEffect, useState } from 'react';
import { View,ScrollView } from 'react-native';
import CardData from './CardData';
import tw from 'twrnc';

const CardComponent = () => {
    const [Datas, SetDatas] = useState([]);

    const name = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const Jsons = await response.json();
        SetDatas(Jsons);
        // console.log("this is datas:", Jsons);  // Corrected log statement
    }

    useEffect(() => {
        name();
    }, []);

    return (
        <ScrollView styles={tw`m-2 `}>
        <View styles={tw`flex-col`}>
            {
                Datas?.map((data) => (
                    <CardData key={data.id} values={data} />
                ))
            }
        </View>
        </ScrollView>
    );
}

export default CardComponent;
