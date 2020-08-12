import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from 'reactstrap/lib/Container';
import classnames from 'classnames';
import {
  Label, FormGroup, Input, InputGroupText, Row, Col, CardHeader, CardTitle, InputGroup, InputGroupAddon, CardBody,
  Form, Card, Button
} from 'reactstrap';
import copy from 'copy-to-clipboard';


const Contact = ({ data }) => {
  const { title, description, pages, social } = data.site.siteMetadata;

  const [state, setState] = React.useState({
    firstNameContact1Focus: false,
    lastNameContact1Focus: false,
    emailContact1Focus: false,
  });

  return (
    <Layout pages={pages} social={social} description={description} title={title}>
      <SEO title={title} />
      <div className="section mt-5 mt-md-0">
        <div className="contactus-1 ">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Get in Touch</h2>
                <h4 className="description">
                  You need more information? Check what other persons are
                  saying about our product. They are very happy with their
                  purchase.
                  </h4>
                <div className="info info-horizontal mt-5">
                  <div className="icon icon-primary text-primary">
                    <i className="fas fa-map-marker fa-3x"></i>
                  </div>
                  <div className="description">
                    <h4 className="mt-2 pl-3 text-primary">Find us at the office</h4>
                    <p className="description">
                      Silevis Software Sp. z o.o.<br />
                      Sienkiewicza Street 17/3<br />
                      25-007 Kielce<br />
                      Poland<br />
                      <i className="far fa-envelope pr-1"></i> <a href="mailto:reactgrid@silevis.com">reactgrid@silevis.com</a>
                      <Button size='md' className="btn-simple ml-2" onClick={() => copy('reactgrid@silevis.com')}>
                        <i className="far fa-copy"></i>
                      </Button>
                    </p>
                  </div>

                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-contact card-raised">
                  <Form id="contact-form" method="post" role="form">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Contact Us</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <label>First name</label>
                          <InputGroup className={classnames({ "input-group-focus": state.firstNameContact1Focus })} >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                              onFocus={e => setState({
                                ...state,
                                firstNameContact1Focus: true
                              })}
                              onBlur={e => setState({
                                ...state,
                                firstNameContact1Focus: false
                              })}
                            />
                          </InputGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": state.lastNameContact1Focus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                                onFocus={e => setState({
                                  ...state,
                                  lastNameContact1Focus: true
                                })}
                                onBlur={e =>
                                  this.setState({
                                    ...state,
                                    lastNameContact1Focus: false
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": state.emailContact1Focus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email Here..."
                            type="text"
                            onFocus={e => setState({ ...state, emailContact1Focus: true })}
                            onBlur={e => setState({ ...state, emailContact1Focus: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input id="message" name="message" rows="6" type="textarea" />
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                              I'm not a robot
                              </Label>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <Button className="btn-simple pull-right" color="primary" >
                            Send Message
                            </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout >
  )
};

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        pages {
          description
          id
          route
          title
          active
        }
        social {
          description
          fontAwesomeIcon
          title
          url
        }
      }
    }
  }
`
