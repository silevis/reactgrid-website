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
    description: 'This demo shouldn\'t be displayed, set "enabled: false" in SamplesWrapper.jsx', 
    className: 'all-in-one-sample', 
    component: <AllInOneSample /> 
  },
  { 
    title: 'Budget planner', 
    enabled: true,
    description: [
      {
        header: `Usage:`,
        content: [
          `Press <code>space</code> key on top row or left column to expand/collapse`,
          `Double click on empty cell will open cell editor that intersect lowest level in both axis (e.g. <code>LPG</code> + <code>Jan, 2018</code>), type new numeric value and commit changes by pressing <code>Enter</code> key`
        ]
      },
      {
        header: `Applied core features:`,
        content: [
          `Area selection`,
          `Custom cell templates`,
          `Copy/cut/paste`,
          `Touch capability`,
          `SASS styling`,
        ]
      }
    ],
    className: 'budget-planner-sample', 
    component: <BudgetPlannerSample /> 
  },
  { 
    title: 'Dropdown number cell', 
    enabled: false,
    description: 'Short description of demo content', 
    className: 'dropdown-number-cell-sample', 
    component: <DropdownNumberCellSample /> 
  },
  { 
    title: 'Multi user', 
    enabled: true,
    description: [
      {
        header: `Capabilities:`,
        content: [
          `Presenting multiple data changes in real time`,
          `Each user idependently changes data on shared sheet`,
        ]
      },
      {
        header: `Applied core features:`,
        content: [
          `Custom focuses`,
          `Freezed column and row`,
          `Area selection`,
          `Custom cell templates`,
          `Copy/cut/paste`,
          `Touch capability`,
          `SASS styling`,
        ]
      }
    ],
    className: 'multi-user-sample', 
    component: <MultiUserSample /> 
  },
  { 
    title: 'Rate cell', 
    enabled: false,
    description: 'Short description of demo content', 
    className: 'rate-cell-sample', 
    component: <RateCellSample /> 
  },
  { 
    title: 'Resize columns', 
    enabled: true,
    description: [
      {
        header: `Capabilities:`,
        content: [
          `Changing width of column`,
          `Disabling this feature for each column`,
        ]
      },
      {
        header: `Applied core features:`,
        content: [
          `Area selection`,
          `Custom cell templates (rate and flag cell)`,
          `Copy/cut/paste`,
          `Touch capability`,
          `SASS styling`,
        ]
      }
    ],
    className: 'resize-column-sample', 
    component: <ResizeColumnSample /> 
  },
  { 
    title: 'Row/columns reorder', 
    enabled: true,
    description: [
      {
        header: `Usage:`,
        content: [
          `Press <code>alt</code> key and select columns/rows`,
          `Drag column/rows do desired destination`,
        ]
      },
      {
        header: `Applied core features:`,
        content: [
          `Column reorder`,
          `Row reorder`,
          `Area selection`,
          `Custom cell templates (rate and flag cell)`,
          `Copy/cut/paste`,
          `Touch capability`,
          `SASS styling`,
        ]
      }
    ],
    className: 'column-reorder-sample', 
    component: <ColumnReorderSample /> 
  },
];

class SamplesWrapper extends React.Component {
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
                <TabContent activeTab={this.state.activeTabIdx} className="example-tabs-content w-100">
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
            {description.length === 2 ? 
              <Row>
                <Col md="5">
                  <h3>{description[0].header}</h3>
                  <ol class="pl-2">
                    {description[0].content.map(item => <li className="pb-3" dangerouslySetInnerHTML={{__html: item}}></li>)}
                  </ol>
                </Col>
                <Col className="d-none d-md-block" md="2"></Col>
                <Col md="5">
                  <h3>{description[1].header}</h3>
                  <ul class="list-unstyled">
                    {description[1].content.map(item => <li className="pb-3"><i class="tim-icons icon-check-2 text-success pr-1"></i> {item}</li>)}
                  </ul>
                </Col>
              </Row>
            : <p dangerouslySetInnerHTML={{__html: description}}></p>}
          </div>
          {component}
        </Col>
      </Row>
    </TabPane>
  )
}

export default SamplesWrapper;