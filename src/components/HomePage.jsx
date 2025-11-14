import { NavLink } from "react-router-dom";



export default function HomePage() {


    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">BolStore</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item p-3">
                                    <NavLink to="/" class="nav-link" >Home</NavLink>
                                </li>
                                <li class="nav-item p-3">
                                    <NavLink to="" class="nav-link" >About Us</NavLink>
                                </li>
                                <li class="nav-item p-3">
                                    <NavLink to="" class="nav-link">Products</NavLink>

                                </li>


                            </ul>
                        </div>
                    </div>
                </nav></header>
            <main>
                <h1>Benvenuto nel nostro store</h1>
                <p>lo store sarà anche brutto ma comprate per favore</p>
            </main>
            <footer>

            </footer>
        </>

    )
}