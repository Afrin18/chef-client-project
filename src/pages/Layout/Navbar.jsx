import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink';
import ac from '../../../public/photo-1438761681033-6461ffad8d80.jpg'

const Navbar = () => {
    return (
        <nav className="navbar bg-base-300 lg:bg-neutral mt-4 mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                        <ActiveLink to='/signUp'>Sign Up</ActiveLink>
                        <ActiveLink to='/login'>Login</ActiveLink>
                    </ul>
                </div>
                <a className="normal-case text-xl lg:text-white">CHEF HUNT</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:text-white gap-8">
                    <ActiveLink className='px-4 py-2 rounded hover:bg-sky-400' to='/'>Home</ActiveLink>
                    <ActiveLink className='px-4 py-2 rounded hover:bg-sky-400' to='/blog'>Blog</ActiveLink>
                    <ActiveLink className='px-4 py-2 rounded hover:bg-sky-400' to='/signUp'>Sign Up</ActiveLink>
                    <ActiveLink className='px-4 py-2 rounded hover:bg-sky-400' to='/login'>Login</ActiveLink>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="tooltip tooltip-left" data-tip="Sohanur">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={ac} />
                        </div>
                    </label>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;