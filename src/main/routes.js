import React from "react";
import { Routes, Route } from "react-router-dom";
import home from "../componentes/home/home";
import UserCrud from "../componentes/user/userCrud";

export default props => (
    <Routes>
        <Route exact path="/" element={home} />
        <Route path="/users" element={UserCrud} />
        <Route path="*" element={home} />
    </Routes>
)