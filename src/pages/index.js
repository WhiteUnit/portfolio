import React from "react"
import Header from "../components/Header/header"
import ContainerFluid from "../components/container-fluid"
import Particle from "../components/particles"
import Layout from "../components/layout"
import Container from "../components/container"
import About from "../components/about"

export default () => (
    <Layout>
    <Particle/>
    <Header/>
    <About>Opis siebie</About>
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
    </Layout>
)