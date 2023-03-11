import { useEffect, useState } from "react";

const useFetch = (path) => {
    const [data,setData] =useState([])
    useEffect(()=>{
        setTimeout(()=>{
            fetch(path)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setData(data)
            })
        },2000)
    },[path])
    return {data};
}
 
export default useFetch;