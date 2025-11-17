import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Product() {

    const { id } = useParams()
    const [prodoct, setProdoct] = useState({})

    function fetchProdoct() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProdoct(res.data))





    }

    useEffect(fetchProdoct, [prodoct])


    return (
        <main>
            <img src={prodoct.image} alt="" />
        </main>
    )
}