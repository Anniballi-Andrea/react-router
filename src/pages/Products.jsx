import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Products() {


    const [prodocts, setProdocts] = useState([])


    function fetchProdocts() {

        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProdocts(res.data))


    }

    useEffect(fetchProdocts, [])

    return (
        <>

            <main>
                <div className="container">
                    <div className="row">
                        {
                            prodocts.map((el) => (
                                <div key={el.id} className="col-sm-12 col-md-4 ">

                                    <div className="card">
                                        <img src={el.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h4>{el.title}</h4>
                                        <p><span>category:</span>{el.category} </p>
                                        <p>{el.description} </p>
                                        <p><span>-{el.price}</span></p>

                                    </div>


                                </div>

                            ))

                        }

                    </div>
                </div>
            </main >

        </>
    )

}
