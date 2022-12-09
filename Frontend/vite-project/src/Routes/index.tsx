import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "../Pages/HomePage"
import Map from "../Pages/Map"
import Subjects from "../Pages/Subjects"

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/map" element={<Map />}/>
                <Route path="/subjects" element={<Subjects />}/>
            </Routes>
        </BrowserRouter>
	)
}