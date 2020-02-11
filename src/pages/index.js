import React from "react"
import Header from "../components/Header/header"
import ContainerFluid from "../components/container-fluid"
import Particle from "../components/particles"
import Layout from "../components/layout"
import Container from "../components/container"
import About from "../components/about"
import Footer from "../components/footer"

export default () => (
    <Layout>
    <Particle heigthValue="100vh"/>
    <Header/>
    <About id="about">Opis siebie</About>
    <ContainerFluid>
        <div>Opis skili</div>
        <img/>
    </ContainerFluid>
    <Container>
        Dodatkowe zdolności zainteresowania
    </Container>
    <Container>
        Kontakt
    </Container>
    <Footer/>
    </Layout>
)