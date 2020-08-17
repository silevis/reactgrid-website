import React, { SyntheticEvent } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from 'reactstrap/lib/Container';
import {
  Label, FormGroup, Input, InputGroupText, Row, Col, InputGroup, InputGroupAddon, CardBody,
  Form, Card, Button, FormFeedback, CustomInput, Alert
} from 'reactstrap';
import copy from 'copy-to-clipboard';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const categories = [
  "General questions",
  "Support",
  "Other"
];

const form = {
  category: {
    isInvalid: true,
    value: ''
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
    isInvalid: undefined,
    value: false
  },
}

const Contact = ({ data }) => {
  const { title, description, pages, social } = data.site.siteMetadata;

  const [state, setState] = React.useState({ ...form });
  const [reCAPTHA, setReCAPTHA] = React.useState(undefined);
  const [sending, setSending] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(undefined);

  const recaptchaRef = React.useRef();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const target = event.target;
    const value = target[target.type === 'checkbox' ? 'checked' : 'value'];
    let isInvalid;
    switch (field) {
      case 'email':
        isInvalid = validateEmail(value as string);
        break;
      case 'category':
        isInvalid = validateCategory(value as string);
        break;
      case 'companyName':
        isInvalid = validateCompanyName(value as string);
        break;
      case 'message':
        isInvalid = validateMessage(value as string);
        break;
      case 'fullName':
        isInvalid = validateFullname(value as string);
        break;
      case 'agreement':
        isInvalid = validateAgreement(value as boolean);
        break;
    }

    setState({
      ...state, [field]: {
        ...state[field],
        isInvalid,
        value
      }
    });
  }

  const validateEmail = (email: string) => {
    const re = /^\S+@\S+$/;
    return re.test(email);
  }

  const validateCategory = (category: string) => {
    return categories.some(cat => cat === category);
  }

  const validateFullname = (fullname: string) => {
    return fullname.length >= 2 && fullname.length < 50;
  }

  const validateCompanyName = (companyName: string) => {
    return companyName.length >= 2 && companyName.length < 50;
  }

  const validateAgreement = (agreement: boolean) => {
    return agreement;
  }

  const validateMessage = (message: string) => {
    return message.length > 10;
  }

  const handleformSubmit = e => {
    e.preventDefault();
    setSending(true);
    setEmailSent(undefined);

    const templateParams = {
      email: state.email.value,
      category: state.category.value,
      fullName: state.fullName.value,
      companyName: state.companyName.value,
      message: state.message.value,
    };

    emailjs.send('gmail', 'template_WPgnbrkT', templateParams, 'user_f8AmrIhk6YqY1dxIup7Pk')
      .then((response) => {
        console.log('SUCCESS, email sent!', response.status, response.text);
        setEmailSent(true);
        setState({ ...form });
        setReCAPTHA(null);
      }, (err) => {
        setEmailSent(false);
        console.log('FAILED...', err);
      }).finally(() => {
        setSending(false);
      });

  }

  const isDisabled = !reCAPTHA || !validateEmail(state.email.value) || !validateCategory(state.category.value)
    || !validateAgreement(state.agreement.value) || !validateFullname(state.fullName.value)
    || !validateCompanyName(state.companyName.value) || !validateMessage(state.message.value);

  console.log({ isDisabled }, state.email.value);

  console.log(reCAPTHA, validateCategory(state.category.value), validateFullname(state.fullName.value)
    , validateCompanyName(state.companyName.value), validateEmail(state.email.value)
    , validateMessage(state.message.value), validateAgreement(state.agreement.value))

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
                            value={state.category.value || 'Select an option'}
                            onChange={e => handleChange(e, 'category')}
                          >
                            <option>Select an option</option>
                            {categories.map(category => <option key={category}>{category}</option>)}
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
                            value={state.fullName.value}
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
                            value={state.companyName.value}
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
                            value={state.email.value}
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
                          value={state.message.value}
                          onChange={e => handleChange(e, 'message')} />
                      </FormGroup>
                      <Row>
                        <Col md="9">
                          <ReCAPTCHA
                            sitekey="6LfcVb4ZAAAAAMAMPGSOfuYSsBhX89cgFcc4fWcV"
                            onChange={res => setReCAPTHA(res)}
                          />
                          <FormGroup check>
                            <Label check>
                              <CustomInput type="checkbox" onChange={e => handleChange(e, 'agreement')}
                                checked={state.agreement.value} id="checkbox"
                                label="I give my consent to the processing of my personal data entered in the above 
                                form for the purpose of addressing the selected category of inquiry."
                              />
                              <FormFeedback>You have to accept agreements!</FormFeedback>
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          {emailSent === false && <Alert color="danger">
                            An error occurred while sending a message
                          </Alert>}
                          <Button className="btn-primary pull-right" color="primary" type="submit"
                            disabled={isDisabled}
                          > {sending
                            ? <i className="fas fa-circle-notch fa-spin"></i>
                            : emailSent
                              ? 'Thanks! Email sent'
                              : 'Send'
                            }</Button>

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
