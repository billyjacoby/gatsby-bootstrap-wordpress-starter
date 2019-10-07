import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage {
        edges {
          node {
            id
            title
            slug
            menu_order
          }
        }
      }
    }
  `)
  const {
    allWordpressPage: { edges: wpPageInfo },
  } = data
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Gatsby Bootstrap Wordpress</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            {wpPageInfo.map(({ node }) => {
              return (
                <Link
                  to={"/" + node.slug}
                  className="link-no-style"
                  key={node.id}
                >
                  <Nav.Link as="span" eventKey={node.slug}>
                    {node.title}
                  </Nav.Link>
                </Link>
              )
            })}
          </Nav>
          <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
