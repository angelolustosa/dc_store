import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { OfertaEspecial } from '../ofertaEspecial/OfertaEspecial'

export const Home = () => {
    return (
        <div>
            <Header />
            {/* <Menu active="home" />

            <Banner />

            <TrendingCollection /> */}
            <OfertaEspecial />
            <Footer />
        </div>
    )
}
