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
import { 
  BudgetPlannerSample, 
  DropdownNumberCellSample, 
  MultiUserSample, 
  RateCellSample, 
  ResizeColumnSample,
  AllInOneSample,
  ColumnReorderSample,
} from '@silevis/reactgrid-samples';

const samplesData = [
  { 
    title: 'All-in-1', 
    enabled: false,
    description: 'This demo shouldn\'t be displayed, set "enabled: false" in DemoWrapper.jsx', 
    className: 'all-in-one-sample', 
    component: <AllInOneSample /> 
  },
  { 
    title: 'Budget planner', 
    enabled: true,
    description: `
      Usage: <br/>
      1. Press <code>space</code> key on first top row or column to expand/collapse<br/>
      2. Double click on empty cell will open cell editor, type new numeric value and commit changes by pressing <code>Enter</code> key
      Short description of demo content
    `, 
    className: 'budget-planner-sample', 
    component: <BudgetPlannerSample /> 
  },
  { 
    title: 'Dropdown number cell', 
    enabled: true,
    description: 'Short description of demo content', 
    className: 'dropdown-number-cell-sample', 
    component: <DropdownNumberCellSample /> 
  },
  { 
    title: 'Multi user', 
    enabled: true,
    description: `
      This demo shows how multiple users can cooperate on the same sheet due to custom focus feature
    `, 
    className: 'multi-user-sample', 
    component: <MultiUserSample /> 
  },
  { 
    title: 'Rate cell', 
    enabled: true,
    description: 'Short description of demo content', 
    className: 'rate-cell-sample', 
    component: <RateCellSample /> 
  },
  { 
    title: 'Resize columns', 
    enabled: true,
    description: 'Short description of demo content', 
    className: 'resize-column-sample', 
    component: <ResizeColumnSample /> 
  },
  { 
    title: 'Row/columns reorder', 
    enabled: true,
    description: 'Short description of demo content', 
    className: 'column-reorder-sample', 
    component: <ColumnReorderSample /> 
  },
];

class DemoWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIdx: 0,
      activeComponent: samplesData.filter(sample => sample.enabled)[0].component
    };
  }
  setActiveTab = (idx) => {
    if (this.state.activeTabIdx !== idx) {
      this.setState({
        activeTabIdx: idx,
        activeComponent: samplesData.filter(sample => sample.enabled)[idx].component
      });
    }
  }

  render() {
    const tabMenuItems = samplesData.filter(sample => sample.enabled).map((sample, idx) =>
      <NavItem key={idx} className="pb-3">
        <NavLink className={classnames({ active: this.state.activeTabIdx === idx })} style={{cursor: 'pointer'}} onClick={() => { this.setActiveTab(idx) }}>
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
      <div className="section">
        <Container>
          <Row>
            <Col>
              <div className="space-50"></div>
              <Nav tabs>
                {tabMenuItems}
                <div className="space-50"></div>
                <TabContent activeTab={this.state.activeTabIdx} className="w-100">
                  {sampleTabs}
                </TabContent>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const SampleTab = ({ tabId, title, description, component, className }) => {
  return (
    <TabPane tabId={tabId}>
      <Row>
        <Col xs="12" className={className}>
          <div className="py-5">
            <h1 className="h1 text-white">{title}</h1>
            <p dangerouslySetInnerHTML={{__html: description}}></p>
          </div>
          {component}
        </Col>
      </Row>
    </TabPane>
  )
}

export default DemoWrapper;