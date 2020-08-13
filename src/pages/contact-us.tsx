import React, { SyntheticEvent } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from 'reactstrap/lib/Container';
import {
  Label, FormGroup, Input, InputGroupText, Row, Col, InputGroup, InputGroupAddon, CardBody,
  Form, Card, Button, FormFeedback, CustomInput
} from 'reactstrap';
import copy from 'copy-to-clipboard';


const Contact = ({ data }) => {
  const { title, description, pages, social } = data.site.siteMetadata;

  const [state, setState] = React.useState({
    category: {
      isInvalid: undefined,
      value: 'General questions'
    },
    fullName: {
      isInvalid: undefined,
      value: ''
    },
    companyName: {
      isInvalid: undefined,
      value: ''
    },
    email: {
      isInvalid: undefined,
      value: ''
    },
    message: {
      isInvalid: undefined,
      value: ''
    },
    agreement: {
      value: ''
    },
  });

  const handleChange = (event: SyntheticEvent, field: string) => {
    console.log((event.target as any).type, (event.target as any).checked);
    if ((event.target as any).type === 'checkbox') {
      setState({ ...state, [field]: { ...state[field], value: (event.target as any).checked } });
    } else {
      setState({ ...state, [field]: { ...state[field], value: (event.target as any).value } });
    }
  }

  const handleformSubmit = (e) => {
    // const isFullNameValid = state.fullName.value.length < 5 || state.fullName.value.length > 50;
    // setState({ ...state, fullName: { ...state.fullName, isInvalid: isFullNameValid } });

    console.log('form sent', state);
    e.preventDefault();
  }

  return (
    <Layout pages={pages} social={social} description={description} title={title}>
      <SEO title={title} />
      <div className="section mt-5 mt-md-0">
        <div className="contactus-1 ">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Contact us</h2>
                <div className="info info-horizontal mt-5">
                  <div className="description">
                    <p className="description">
                      Silevis Software Sp. z o.o.<br />
                      Sienkiewicza Street 17/3<br />
                      25-007 Kielce<br />
                      Poland<br /><br />
                      <i className="far fa-envelope pr-1"></i> <a href="mailto:reactgrid@silevis.com">reactgrid@silevis.com</a>
                      <Button size='sm' className="btn-simple ml-2" onClick={() => copy('reactgrid@silevis.com')}>
                        <i className="far fa-copy"></i>
                      </Button>
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="7">
                <Card className="card-contact card-raised">
                  <Form id="contact-form" method="post" role="form" onSubmit={handleformSubmit}>
                    <CardBody>
                      <FormGroup>
                        <label>Select a category</label>
                        <InputGroup >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="far fa-question-circle"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="select" aria-label="Select a category..." placeholder="Select a category..." bsSize="lg"
                            value={state.category.value || 'General questions'}
                            onChange={e => handleChange(e, 'category')}
                          >
                            <option disabled>Select an option</option>
                            <option>General questions</option>
                            <option>Support</option>
                            <option>Other</option>
                          </Input>
                          <FormFeedback>You have to select and option!</FormFeedback>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Full name</label>
                        <InputGroup >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="far fa-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            onChange={e => handleChange(e, 'fullName')}
                            aria-label="Full name..."
                            placeholder="Full name..."
                            type="text"
                            bsSize="lg"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Company name</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="far fa-building"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            onChange={e => handleChange(e, 'companyName')}
                            aria-label="Company name..."
                            placeholder="Company name..."
                            type="text"
                            bsSize="lg"
                          />
                          <FormFeedback>This field is invalid!</FormFeedback>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fas fa-at"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            onChange={e => handleChange(e, 'email')}
                            placeholder="Email Here..."
                            type="email"
                            bsSize="lg"
                          />
                          <FormFeedback>This field is invalid!</FormFeedback>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input id="message" name="message" rows="10" type="textarea" bsSize="lg" placeholder="Your message"
                          onChange={e => handleChange(e, 'message')} />
                      </FormGroup>
                      <Row>
                        <Col md="9">
                          <FormGroup check>
                            <Label check>
                              <CustomInput type="checkbox" onChange={e => handleChange(e, 'agreement')}
                                checked={state.agreement.value} id="exampleCustomCheckbox" 
                                label="I give my consent to the processing of my personal data entered in the above 
                                form for the purpose of addressing the selected category of inquiry."
                              />
                              <FormFeedback>You have to accept agreements!</FormFeedback>
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <Button className="btn-primary pull-right" color="primary" type="submit">Send</Button>
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
