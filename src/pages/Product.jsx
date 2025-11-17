import { useParams } from "react-router-dom"

export default function Product() {

    const { id } = useParams()


    return (
        <main>
            <h1>Prodotto numero {id}</h1>
        </main>
    )
}