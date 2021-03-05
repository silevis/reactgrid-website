import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from 'reactstrap/lib/Container';
import {
  Label, FormGroup, Input, InputGroupText, Row, Col, InputGroup, InputGroupAddon, CardBody,
  Form, Card, Button, FormFeedback, CustomInput, Alert, Popover, PopoverBody
} from 'reactstrap';
import copy from 'copy-to-clipboard';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const categories = [
  "General questions",
  "PRO version inquiry",
  "Request for quotation",
  "Support",
  "Other"
];

const SERVICE_ID = "sendgrid";
const TEMPLATE_ID = "template_WPgnbrkT";
const USER_ID = "user_f8AmrIhk6YqY1dxIup7Pk";
const SITE_KEY = "6LfcVb4ZAAAAAMAMPGSOfuYSsBhX89cgFcc4fWcV";

const form = {
  category: {
    isInvalid: undefined,
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
  const [validateForm, setValidateForm] = React.useState(false);

  const [copyPopoverOpen, setCopyPopoverOpen] = React.useState(false);

  const toggleCopyPopover = () => setCopyPopoverOpen(!copyPopoverOpen);

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
    setEmailSent(undefined);
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

  const validateCategory = (category: string) => categories.some(cat => cat === category);

  const validateFullname = (fullname: string) => fullname.length >= 5 && fullname.length < 50;

  const validateCompanyName = (companyName: string) => companyName.length >= 5 && companyName.length < 50;

  const validateAgreement = (agreement: boolean) => agreement;

  const validateMessage = (message: string) => message.length > 20;

  const isFormValid = !reCAPTHA || !validateEmail(state.email.value) || !validateCategory(state.category.value)
    || !validateAgreement(state.agreement.value) || !validateFullname(state.fullName.value)
    || !validateCompanyName(state.companyName.value) || !validateMessage(state.message.value);

  const handleformSubmit = e => {
    e.preventDefault();
    setSending(true);
    setEmailSent(undefined);
    setValidateForm(true);

    if (isFormValid) {
      setEmailSent(false);
      setSending(false);
      return;
    }

    const templateParams = {
      email: state.email.value,
      category: state.category.value,
      fullName: state.fullName.value,
      companyName: state.companyName.value,
      message: state.message.value,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('SUCCESS, email sent!', response.status, response.text);
        setEmailSent(true);
        setState({ ...form });
        setReCAPTHA(null);
        setValidateForm(false);
      }, (err) => {
        setEmailSent(false);
        console.error('FAILED...', err);
      }).finally(() => {
        setSending(false);
      });

  }


  return (
    <Layout pages={pages} social={social} description={description} title={title}>
      <SEO title={'Contact us'} description={`Got a question or need technical support? Our team are here to help. Contact us!`} />
      <div className="section mt-5 mt-md-0">
        <div className="contactus-1 ">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Contact us</h2>
                <div className="info info-horizontal mt-5">
                  <div className="description">
                    <p className="description p-0">
                      Silevis Software Sp. z o.o.<br />
                      Sienkiewicza Street 17/3<br />
                      25-007 Kielce<br />
                      Poland<br /><br />
                      <span>
                        <i className="far fa-envelope pr-1"></i> <a href="mailto:reactgrid@silevis.com">reactgrid@silevis.com</a>
                        <Button size='sm' className="btn-simple ml-2" onClick={() => copy('reactgrid@silevis.com')} id="Popover1">
                          <i className="far fa-copy"></i>
                        </Button>
                        <Popover placement="top" isOpen={copyPopoverOpen} target="Popover1" toggle={toggleCopyPopover}>
                          <PopoverBody>Copied!</PopoverBody>
                        </Popover>
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="7">
                <Card className="card-contact card-raised">
                  <Form id="contact-form" method="post" role="form" onSubmit={handleformSubmit}>
                    <CardBody>
                      <FormGroup>
                        <Label for="category">Select a category</Label>
                        <InputGroup >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="far fa-question-circle"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="select" aria-label="Select a category..." placeholder="Select a category..." bsSize="lg"
                            value={state.category.value || 'Select an option'}
                            onChange={e => handleChange(e, 'category')}
                            invalid={validateForm && !state.category.isInvalid}
                          >
                            <option>Select an option</option>
                            {categories.map(category => <option key={category}>{category}</option>)}
                          </Input>
                          <FormFeedback>You have to select an option!</FormFeedback>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <Label for="fullName">Full name</Label>
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
                            invalid={validateForm && !state.fullName.isInvalid}
                          />
                          <FormFeedback>This field is invalid (min. 5 chars)</FormFeedback>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <Label for="companyName">Company name</Label>
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
                            invalid={validateForm && !state.companyName.isInvalid}
                          />
                          <FormFeedback>This field is invalid! (min. 5 chars)</FormFeedback>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <Label for="email">Email address</Label>
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
                            invalid={validateForm && !state.email.isInvalid}
                          />
                          <FormFeedback>Type valid email address!</FormFeedback>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <Label for="message">Your message</Label>
                        <Input id="message" name="message" rows="10" type="textarea" bsSize="lg" placeholder="Your message"
                          value={state.message.value}
                          invalid={validateForm && !state.message.isInvalid}
                          onChange={e => handleChange(e, 'message')} />
                        <FormFeedback>The message should be at least 20 characters long</FormFeedback>
                      </FormGroup>
                      <Row>
                        <Col>
                          {emailSent === false && <Alert color="danger">
                            {isFormValid ? 'Complete contact form and try again' : 'An error occurred while sending a message'}
                          </Alert>}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <ReCAPTCHA
                            sitekey={SITE_KEY}
                            onChange={res => {
                              setEmailSent(undefined);
                              setReCAPTHA(res);
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12" lg="9">
                          <FormGroup check>
                            <Label check for="agreement">
                              <CustomInput type="checkbox" onChange={e => handleChange(e, 'agreement')}
                                checked={state.agreement.value} id="checkbox"
                                label="I give my consent to the processing of my personal data entered in the above 
                                form for the purpose of addressing the selected category of inquiry."
                                invalid={validateForm && !state.agreement.isInvalid}
                              />
                              <FormFeedback>You have to accept agreements!</FormFeedback>
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md="12" lg="3">
                          <Button className="btn-primary pull-right" color="primary" type="submit">
                            {sending
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
          active
        }
      }
    }
  }
`
