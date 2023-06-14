import React, { useState } from 'react'
import logoTitulo from '../../assets/img/logo-titulo.png'
import logoCarrinho from "../../assets/img/headerCarrinho.svg";
import './Header.css'
import { Carrinho } from '../carrinho/Carrinho';
import { ButtonDefault } from '../button/ButtonDefault.Jsx';

export const Header = () => {
    const [showCarrinho, setShowCarrinho] = useState(false);

    return (
        <div>
            <div className='container'>
                <nav className="navbar ">
                    <div className="container-fluid">
                        <a className="logo-titulo  text-decoration-none" href="/">
                            <img src={logoTitulo} alt="" className="styles_imagemLogo__9LaY3" />
                            <div className="titulo">Digital Store</div>

                        </a>
                        <form className="d-flex" role="search">
                            {/*  <input className="form-control" type="search" placeholder="Pesquisar produto..." aria-label="Search" />*/}
                            <div className="input-search">
                                <input type="text" className="search" placeholder="Pesquisar produto..." />
                                <div className='icon-search' >
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" class="styles_icon__txKbk" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </form>

                        <div>
                            <a href="/cadastro">Cadastre-se</a>
                        </div>

                        <span style={{ position: "relative", cursor: "pointer" }}>
                            <img src={logoCarrinho} alt="carrinho" onClick={() => setShowCarrinho(!showCarrinho)} />
                            {showCarrinho && <Carrinho />}
                        </span>

                        <ButtonDefault nome='Entrar' />
                    </div>
                </nav>
            </div>

        </div>
    )
}
