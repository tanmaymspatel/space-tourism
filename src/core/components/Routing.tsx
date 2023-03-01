import { Routes, Route } from "react-router-dom";
import Crew from "../../pages/Crew";
import Destination from "../../pages/Destination";

import Home from "../../pages/Home";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
        </Routes>
    )
};

export default Routing;
