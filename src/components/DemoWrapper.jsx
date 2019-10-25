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
class DemoWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const examples = [
      {
        title: 'Budget planner',
        description: 'Short description of demo content',
        content: <BudgetPlannerSample />
      },
      {
        title: 'Dropdown number cell',
        description: 'Short description of demo content',
        content: <DropdownNumberCellSample />
      },
      {
        title: 'Multiuser',
        description: 'Short description of demo content',
        content: <MultiUserSample />
      },
      {
        title: 'Rate cell',
        description: 'Short description of demo content',
        content: <RateCellSample />
      },
      {
        title: 'Resize columns',
        description: 'Short description of demo content',
        content: <ResizeCellSample />
      }
    ];
    const tabMenuItems = examples.map((example, idx) => {
      return (
        <NavItem>
          <NavLink className={classnames({ active: this.state.activeTab === idx })} onClick={() => { this.toggle(idx) }}>
            {example.title}
          </NavLink>
        </NavItem>
      )
    });
    const examplesTabs = examples.map((example, idx) => {
      return (
        <ExampleTab tabId={idx} title={example.title} description={example.description}>
          {example.content}
        </ExampleTab>
      )
    });
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
              </Nav>
              <div className="space-50"></div>
              <TabContent activeTab={this.state.activeTab}>
                {examplesTabs}
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const ExampleTab = ({ tabId, title, description, children }) => {
  return (
    <TabPane tabId={tabId}>
      <Row>
        <Col>
          <h1 className="h1 text-white">{title}</h1>
          <p>{description}</p>
          {children}
        </Col>
      </Row>
    </TabPane>
  )
}

export default DemoWrapper;