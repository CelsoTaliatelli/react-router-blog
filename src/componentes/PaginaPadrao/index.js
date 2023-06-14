import { Outlet } from "react-router-dom";
import Banner from "../banner"

const PaginaPadrao = () => {
    return (
        <main>
            <Banner />
            <Outlet></Outlet>
        </main>
    )
}

export default PaginaPadrao;