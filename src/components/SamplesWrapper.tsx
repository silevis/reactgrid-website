import React from 'react';
import classnames from 'classnames';
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { samplesData } from '../../content/examples/examplesData';
import { useQueryParam } from "gatsby-query-params";
import * as samples from '../samples';
import { Link } from 'gatsby';

const SamplesWrapper: React.FC = () => {
  // TODO fix rerendering issue
  const exampleParam = useQueryParam('example', 'budget-planner');
  const enabledExamples = samplesData.filter(sample => sample.enabled);
  const activeTabIdx = enabledExamples.findIndex(sample => sample.urlParam === exampleParam);
  const activeComponent = enabledExamples.find(sample => sample.urlParam === exampleParam).component;

  const tabMenuItems = enabledExamples.map((sample, idx) =>
    <NavItem key={idx} className="pb-3">
      <Link to={'/examples/?example=' + sample.urlParam}
      >
        <NavLink
          className={classnames({ active: activeTabIdx === idx, 'h-100 d-flex flex-column justify-content-center': true })}
          style={{ cursor: 'pointer' }}
          tag='span'
        >
          {sample.title}
        </NavLink>
      </Link>
    </NavItem>
  );
  const sampleTabs = enabledExamples.map((sample, idx) =>
    <SampleTab
      key={idx}
      tabId={idx}
      title={sample.title}
      description={sample.description}
      className={sample.className}
      component={activeComponent}
    />
  );

  return (
    <Container className="section  px-3">
      <Row>
        <Col>
          <div className="space-50"></div>
          <Nav pills className={`justify-content-center nav-pills-icons`}  >
            {tabMenuItems}
            <div className="space-50"></div>
            <TabContent activeTab={activeTabIdx} className="example-tabs-content w-100">
              {sampleTabs}
            </TabContent>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

const SampleTab = ({ tabId, title, description, component, className }) => {
  const [column1, column2] = description;
  const Sample = samples[component];
  return (
    <TabPane tabId={tabId}>
      <Row>
        <Col xs="12" className={className}>
          <div className={tabId === 3 ? "sample-wrapper-workhours" : "sample-wrapper"}>
            <Sample />
          </div>
          <div className="pt-5">
            {description.length === 2 ?
              <Row>
                <Col md="6" className="pb-4">
                  <h3>{column1.header}</h3>
                  <ul className="">
                    {column1.content.map((item, idx) => <li key={idx} className="pb-3 text-left">{item}</li>)}
                  </ul>
                </Col>
                <Col md="6">
                  <h3>{column2.header}</h3>
                  <ul className="">
                    {column2.content.map((item, idx) => <li key={idx} className="pb-2 text-left">{item}</li>)}
                  </ul>
                </Col>
              </Row>
              : <p dangerouslySetInnerHTML={{ __html: description }}></p>}
          </div>
        </Col>
      </Row>
    </TabPane>
  )
}

export default SamplesWrapper;
