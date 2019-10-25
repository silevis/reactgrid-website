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
import { BudgetPlannerSample, DropdownNumberCellSample, MultiUserSample, RateCellSample, ResizeCellSample } from '@silevis/reactgrid-samples';

const samplesData = [
  { title: 'Budget planner', description: 'Short description of demo content', component: <BudgetPlannerSample /> },
  { title: 'Dropdown number cell', description: 'Short description of demo content', component: <DropdownNumberCellSample /> },
  { title: 'Multiuser', description: 'Short description of demo content', component: <MultiUserSample /> },
  { title: 'Rate cell', description: 'Short description of demo content', component: <RateCellSample /> },
  { title: 'Resize columns', description: 'Short description of demo content', component: <ResizeCellSample /> }
];
class DemoWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIdx: 0,
      activeComponent: samplesData[0].component
    };
  }
  setActiveTab = (idx) => {
    if (this.state.activeTabIdx !== idx) {
      this.setState({
        activeTabIdx: idx,
        activeComponent: samplesData[idx].component
      });
    }
  }

  render() {
    const tabMenuItems = samplesData.map((sample, idx) =>
      <NavItem key={idx}>
        <NavLink className={classnames({ active: this.state.activeTabIdx === idx })} onClick={() => { this.setActiveTab(idx) }}>
          {sample.title}
        </NavLink>
      </NavItem>
    );
    return (
      <div className="section">
        <Container>
          <Row>
            <Col>
              <div className="space-50"></div>
              <Nav tabs>
                {/* <NavItem className="mr-auto">
                  <NavLink disabled className="pl-0">
                    <h4 className="mb-0">Examples</h4>
                  </NavLink>
                </NavItem> */}
                {tabMenuItems}
                <div className="space-50"></div>
                <TabContent activeTab={this.state.activeTabIdx}>
                  {samplesData.map((sample, idx) => <SampleTab key={idx} tabId={idx} title={sample.title} description={sample.description} component={this.state.activeComponent} />)}
                </TabContent>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const SampleTab = ({ tabId, title, description, component }) => {
  return (
    <TabPane tabId={tabId}>
      <Row>
        <Col>
          <h1 className="h1 text-white">{title}</h1>
          <p>{description}</p>
          {component}
        </Col>
      </Row>
    </TabPane>
  )
}

export default DemoWrapper;