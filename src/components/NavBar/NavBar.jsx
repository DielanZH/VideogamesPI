import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    <nav>
        <ul>
            <li>
                <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/create"}>Create</NavLink>
            </li>
        </ul>
    </nav>
}