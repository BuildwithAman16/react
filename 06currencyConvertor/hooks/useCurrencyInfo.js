import {useState,useEffect} from 'react'

function useCurrencyInfo(currency) {
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(
          `https://v6.exchangerate-api.com/v6/41244f4e042f0fa8d554a01b/latest/${currency}`
        )
          .then((res) => res.json())
          .then((res) => setdata(res.conversion_rates));
    },[currency])
    console.log(data)
    return data
}
 export default useCurrencyInfo
