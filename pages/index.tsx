import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Nav, Row, Navbar, Card, Button, CardGroup, ButtonGroup } from 'react-bootstrap'
import { FaDiscord, FaGithub } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kerla</title>
        <meta name="description" content="A new operating system in Rust, with Linux ABI compatibility." />
      </Head>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Kerla</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/docs/introduction.html">Documentation</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/nuta/kerla"><FaGithub /> GitHub</Nav.Link>
            <Nav.Link href="https://discord.gg/6Pu4ujpp6h"><FaDiscord /> Discord</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="bg-light p-5 rounded-lg m-3 my-auto">
        <Row>
          <Col>
            <h1 className="display-4">Kerla</h1>
            <p className="lead">A new operating system with Linux ABI compatibility, written in Rust.</p>
            <div>
              <Button size="lg" href="/docs/introduction.html" className="mr-10">Quickstart</Button>{' '}
              <Button size="lg" href="/docs/quickstart.html" variant="outline-primary">Documentation</Button>{' '}
              <Button size="lg" href="https://github.com/nuta/kerla" variant="outline-primary">GitHub</Button>
            </div>
          </Col>
          <Col>
            <Image src="/screenshot.png" width="640" height="412" className="rounded mx-auto d-block"
              alt="A screenshot of Kerla. It can run Linux binaries like Busybox and curl!" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
