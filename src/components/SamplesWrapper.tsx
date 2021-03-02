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
import { samplesData } from '../../content/examples/samplesData';
import { useQueryParam } from "gatsby-query-params";
import * as samples from '../samples';

const SamplesWrapper: React.FC = () => {
  const exampleParam = useQueryParam('example', 'budget-planner');
  console.log(exampleParam);

  const [activeTabIdx, setActiveTabIdx] = React.useState(samplesData
    .filter(sample => sample.enabled)
    .findIndex(sample => {
      console.log(sample.urlParam, exampleParam, sample.urlParam === exampleParam);

      return sample.urlParam === exampleParam
    }));
  console.log(activeTabIdx);

  const [activeComponent, setActiveComponent] =
    React.useState(() => samplesData.filter(sample => sample.enabled)[activeTabIdx].component);

  const setActiveTab = idx => {
    if (activeTabIdx !== idx) {
      setActiveTabIdx(idx);
      setActiveComponent(samplesData.filter(sample => sample.enabled)[idx].component)
    }
  }

  const tabMenuItems = samplesData.filter(sample => sample.enabled).map((sample, idx) =>
    <NavItem key={idx} className="pb-3">
      <NavLink
        className={classnames({ active: activeTabIdx === idx, 'h-100 d-flex flex-column justify-content-center': true })}
        style={{ cursor: 'pointer' }}
        onClick={() => { setActiveTab(idx) }}
      >
        {sample.title}
      </NavLink>
    </NavItem>
  );
  const sampleTabs = samplesData.filter(sample => sample.enabled).map((sample, idx) =>
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
                    {column1.content.map((item, idx) => <li key={idx} className="pb-3 text-left" dangerouslySetInnerHTML={{ __html: item }}></li>)}
                  </ul>
                </Col>
                <Col md="6">
                  <h3>{column2.header}</h3>
                  <ul className="">
                    {column2.content.map((item, idx) => {
                      return <li key={idx} className="pb-2 text-left">
                        {/* {<i className="fas fa-check pr-1 text-primary"></i>}  */}
                        {item}</li>
                    })}
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
