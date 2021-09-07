import React, { useEffect, useState } from 'react';
import AnimalList from './AnimalList';
import axios from 'axios';
import GlobalStyle from '../../css/Global';

const Main = () => {

    const [data, setData] = useState([])
    
    const currentTime= ()=>{
        const now = new Date()
        const year = String(now.getFullYear())
        const month = String(now.getMonth()+1).padStart(2,"0")
        const date = String(now.getDate()).padStart(2,"0")
        const today = year+month+date
        return today
    }
    
    const weekBefore = String(parseInt(currentTime())-7)
    
    useEffect(()=>{
        const SERVICE_KEY = 'K9HxvcXQXLKJNGIvr24rm84baa1DkFe3kvlw43JNgYzXtbSiqETMkPOczwBjI38%2BRm8seW5pEUglv0rB2Tsp2g%3D%3D'
        const urls = `http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?bgnde=20210701&endde=20210730&pageNo=1&numOfRows=10&ServiceKey=${SERVICE_KEY}`
        const url = `/abandonmentPublic?bgnde=${weekBefore}&endde=${currentTime()}&pageNo=1&numOfRows=12&ServiceKey=${SERVICE_KEY}`

        axios.get('/api'+url)
        .then(
            res =>{
                const animals = res.data.response.body.items.item
                console.log(url)
                setData(animals)
            }
        )

    },[])



    return (
        <>
        <GlobalStyle/>
        <AnimalList data={data}/>
        </>
    );
};

export default Main;