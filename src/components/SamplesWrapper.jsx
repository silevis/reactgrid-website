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
  Button
} from "reactstrap";
import * as samples from '@silevis/reactgrid-samples';

const samplesData = [
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
          `Custom cell templates (rate and flag cell)`,
          `Copy/cut/paste`,
          `Touch capability`,
          `SASS styling`,
        ]
      }
    ],
    className: 'multi-user-sample',
    component: 'MultiUserSample'
  },
  // { 
  //   title: 'Budget planner', 
  //   enabled: true,
  //   description: [
  //     {
  //       header: `Usage:`,
  //       content: [
  //         `Press <code>space</code> key on top row or left column to expand/collapse category`,
  //         `Double click on empty cell will open editor that intersect lowest level in both axis (e.g. <code>LPG</code> + <code>Jan, 2018</code>), type new numeric value and commit changes by pressing <code>Enter</code> key`
  //       ]
  //     },
  //     {
  //       header: `Applied core features:`,
  //       content: [
  //         `Area selection`,
  //         `Column row selection`,
  //         `Custom cell templates`,
  //         `Copy/cut/paste capability`,
  //         `Touch capability`,
  //         `SASS styling`,
  //       ]
  //     }
  //   ],
  //   className: 'budget-planner-sample', 
  //   component: 'BudgetPlannerSample' 
  // },
  {
    title: 'Frozens Sample',
    enabled: false,
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
          `Column resize`,
          `Column and row reorder`,
          `Frozen panes`,
          `Freezed column and row`,
          `Area selection`,
          `Custom cell templates`,
          `Disabled column selecting`,
          `Copy/cut/paste`,
          `Touch capability`,
          `SASS styling`,
        ]
      }
    ],
    className: 'frozens-sample',
    component: 'FrozensSample'
  },
  {
    title: 'Rate cell',
    enabled: false,
    description: 'Short description of demo content',
    className: 'rate-cell-sample',
    component: 'RateCellSample'
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
          `Handling <code>onColumnResize()</code> event`,
        ]
      },
      {
        header: `Applied core features:`,
        content: [
          `Column resize`,
          `Area selection`,
          `Custom cell templates (rate and flag cell)`,
          `Copy/cut/paste`,
          `Touch capability`,
          `SASS styling`,
        ]
      }
    ],
    className: 'resize-column-sample',
    component: 'ResizeColumnSample'
  },
  {
    title: 'Row/columns reorder',
    enabled: true,
    description: [
      {
        header: `Usage:`,
        content: [
          `Press <code>ctlr</code> key and select columns/rows`,
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
    component: 'ColumnReorderSample'
  },
];

class SamplesWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIdx: undefined,
      activeComponent: samplesData.filter(sample => sample.enabled)[0].component,
      a: localStorage.getItem('a') || false,
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

  handleOnBtnClick = () => {
    localStorage.setItem('a', 'true');
    this.setState({ a: 'true' });
  }

  render() {
    const tabMenuItems = samplesData.filter(sample => sample.enabled).map((sample, idx) =>
      <NavItem key={idx} className="pb-3">
        <NavLink className={classnames({ active: this.state.activeTabIdx === idx })} style={{ cursor: 'pointer' }}
          onClick={() => { this.setActiveTab(idx) }}>
          {sample.title}
        </NavLink>
      </NavItem>
    );

    const sampleTabs = samplesData.filter((sample, idx) => sample.enabled).map((sample, idx) =>
      <SampleTab
        key={idx}
        tabId={idx}
        title={sample.title}
        description={sample.description}
        className={sample.className}
        component={this.state.activeComponent}
      />
    );

    const isSampleSelected = this.state.activeTabIdx !== undefined;
    return (
      <div className="section">
        <Container>
          <Row>
            <Col>
              <div className="space-50"></div>
              {!isSampleSelected &&
                <div className="d-flex flex-column align-items-center">
                  <h1 className="text-center py-5">Try all features on our sample applications</h1>
                  {this.state.a === false &&
                    <Button color="success" onClick={() => this.handleOnBtnClick()} className=" btn-simple">Show available samples <i className="tim-icons icon-double-right" /></Button>
                  }
                </div>
              }
              {this.state.a === 'true' &&
                <Nav tabs className="justify-content-center">
                  {tabMenuItems}
                  <div className="space-50"></div>
                  <TabContent activeTab={this.state.activeTabIdx} className="example-tabs-content w-100">
                    {sampleTabs}
                  </TabContent>
                </Nav>
              }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const SampleTab = ({ tabId, title, description, component, className }) => {
  const [column1, column2] = description;
  // const Sample = samples[component];
  return (
    <TabPane tabId={tabId}>
      <Row>
        <Col xs="12" className={className}>
          <h1 className="h1 text-success my-3">{title}</h1>
          <div className="sample-wrapper">
            {/* <Sample/> */}
          </div>
          <div className="pt-5">
            {description.length === 2 ?
              <Row>
                <Col md="5">
                  <h3>{column1.header}</h3>
                  <ol className="pl-2">
                    {column1.content.map((item, idx) => <li key={idx} className="pb-3" dangerouslySetInnerHTML={{ __html: item }}></li>)}
                  </ol>
                </Col>
                <Col className="d-none d-md-block" md="2"></Col>
                <Col md="5">
                  <h3>{column2.header}</h3>
                  <ul className="list-unstyled">
                    {column2.content.map((item, idx) => <li key={idx} className="pb-3"><i className="tim-icons icon-check-2 text-success pr-1"></i> {item}</li>)}
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