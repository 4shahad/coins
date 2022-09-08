import main from './component/main.jpg'
import { useEffect, useState } from 'react';
import './App.css';
import Head from './component/Head';
import Formss from './forms/Formss';
import PriceComponent from './PriceComponent/PriceComponent';



const App=()=> {
const [coinImg,setCoinImg]=useState({main})
const [coinName,setCoinName]=useState('choose Coin')
const [coinPrice,setCoinPrice]=useState('0')
const [coinList,setCoinList]=useState([])

useEffect(()=>{
  const fetchCoinData=async()=>{
    const request =await fetch('https://api.coincap.io/v2/assets')
    const data=await request.json()
    const cointMap=data.name.map((coins) => {
      return {
        value: coins.id        ,
        label: coins.name,
      };
    });
    setCoinList(cointMap);
    setCoinName(data.name)
    setCoinPrice(data.priceUsd)
    setCoinImg('https://cryptoflash-icons-api.herokuapp.com/svg/color/'+ data.symbol.toLowerCase())
    console.log(data)

  }
  fetchCoinData()
},[])

const onSelect = async (option) => {
  console.log(option);
  const request =await fetch('https://api.coincap.io/v2/assets/'+setCoinName)
    const data=await request.json()
    const cointMap=data.name.map((coins) => {
      return {
        value: coins.id        ,
        label: coins.name,
      };
    });
    setCoinList(cointMap);
    setCoinName(data.data.name)
    setCoinPrice(data.data.priceUsd)
   setCoinImg('https://cryptoflash-icons-api.herokuapp.com/svg/color/'+ data.data.symbol.toLowerCase())
    console.log(data)

};
  return (
    <div className="App" >
     <Head />
     <Formss coinList={coinList} />
     <PriceComponent coinImg={coinImg} coinName={coinName} coinPrice={coinPrice} />
    </div>
  );
}

export default App;
