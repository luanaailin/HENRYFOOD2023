import React from 'react';
import style from './Homepage.module.css';
import { NavLink } from 'react-router-dom';


export default function Homepage() {
    return (
        <div className={style.background}>
                <NavLink to="/recipes">
                <button className={style.card}>
                    <img src="https://i.postimg.cc/hjzMrJk6/logo-png" alt="-"/>
                </button> 
                </NavLink>
            </div>    
)};