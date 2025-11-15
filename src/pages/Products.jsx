import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {

    const [prodocts, setProdocts] = useState([])


    function fetchProdocts() {

        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProdocts(res.data))

        console.log(prodocts)
    }

    useEffect(fetchProdocts, [])

    return (
        <>

            <main>
                <div className="container">
                    <h1>noi siamo noi</h1>
                    <p>comprate!!!</p>

                    <div className="row">
                        {
                            prodocts.map((el) => (
                                <div key={el.id} className="col-sm-12 col-md-4 col-lg-3">
                                    <div className="card">
                                        <img src={el.image} alt="" />
                                        <div className="card-body">
                                            <h4>{el.title}</h4>
                                            <span>Description:</span>
                                        </div>
                                    </div>
                                </div>

                            ))

                        }

                    </div>
                </div>
            </main>

        </>
    )

}
