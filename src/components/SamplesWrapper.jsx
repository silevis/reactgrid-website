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
import { samplesData } from './../../content/examples/samplesData';
import * as samples from '@silevis/reactgrid-samples';

class SamplesWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIdx: undefined,
      activeComponent: samplesData.filter(sample => sample.enabled)[0].component,
    };
  }
  setActiveTab = idx => {
    if (this.state.activeTabIdx !== idx) {
      this.setState({
        activeTabIdx: idx,
        activeComponent: samplesData.filter(sample => sample.enabled)[idx].component
      });
    }
  }

  render() {
    const isSampleSelected = this.state.activeTabIdx !== undefined;
    const tabMenuItems = samplesData.filter(sample => sample.enabled).map((sample, idx) =>
      <NavItem key={idx} className="pb-3">
        <NavLink className={classnames({ active: this.state.activeTabIdx === idx, ' h-100 d-flex flex-column justify-content-center': true })} style={{ cursor: 'pointer' }}
          onClick={() => { this.setActiveTab(idx) }}>
          {!isSampleSelected && <i className={`${sample.icon} mt-2 mb-4`} />}
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
        component={this.state.activeComponent}
      />
    );

    return (
      <Container className="section">
        <Row>
          <Col>
            <div className="space-50"></div>
            {!isSampleSelected && <h1 className="text-center py-5">Try all features on our sample applications</h1>}
            <Nav pills={!isSampleSelected} tabs={isSampleSelected} className={`justify-content-center nav-pills-icons ${!isSampleSelected ? 'nav-pills-success' : ''}`}  >
              {tabMenuItems}
              <div className="space-50"></div>
              <TabContent activeTab={this.state.activeTabIdx} className="example-tabs-content w-100">
                {sampleTabs}
              </TabContent>
            </Nav>
          </Col>
        </Row>
      </Container>
    )
  }
}

const SampleTab = ({ tabId, title, description, component, className }) => {
  const [column1, column2] = description;
  const Sample = samples[component];
  return (
    <TabPane tabId={tabId}>
      <Row>
        <Col xs="12" className={className}>
          <div className="sample-wrapper">
            <Sample />
          </div>
          <div className="pt-5">
            {description.length === 2 ?
              <Row>
                <Col md="5" className="pb-4">
                  <h3>{column1.header}</h3>
                  <ol className="pl-2">
                    {column1.content.map((item, idx) => <li key={idx} className="pb-3 text-left" dangerouslySetInnerHTML={{ __html: item }}></li>)}
                  </ol>
                </Col>
                <Col className="d-none d-md-block" md="2"></Col>
                <Col md="5">
                  <h3>{column2.header}</h3>
                  <ul className="list-unstyled">
                    {column2.content.map((item, idx) => <li key={idx} className="pb-2 text-left"><i className="tim-icons icon-check-2 text-success  pr-1"></i> {item}</li>)}
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