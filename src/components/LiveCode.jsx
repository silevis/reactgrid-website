import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import {
  Container,
  Row as BootRow,
  Col,
  Button,
  Modal, ModalBody
} from "reactstrap";
import { ReactGrid } from "@silevis/reactgrid";

export const LiveCode = ({ code, title }) => {
  const scope = { ReactGrid };

  const [mode, setMode] = React.useState(() => ('closed'));
  const [modal, setModal] = React.useState(false);

  const toggle = () => {
    setModal(!modal);
    setMode('both');
  };

  const liveComponent = <MyLiveProvider mode={mode} code={code} scope={scope} setMode={setMode} />

  return (
    <>
      <Container style={{ borderRadius: '5px', backgroundColor: '#0f102c', padding: '10px' }}>
        <BootRow className={'pb-3'}>
          <Col className={'d-flex align-items-center'} sm={'7'}>
            <h5 className='p-0 m-0'>{title}</h5>
          </Col>
          <Col className={'d-flex justify-content-end'} sm={'5'}>
            <Button onClick={toggle} size="sm" color="success">
              {!modal ? `Toggle fullscreen` : `Collapse`}
            </Button>
          </Col>
        </BootRow>
        <CodeModal modal={modal} toggle={toggle} liveComponent={liveComponent} title={title} />
        <div style={{ height: mode !== 'closed' ? '400px' : 'unset' }}>
          {liveComponent}
        </div>
      </Container>
    </>
  )
}

const CodeModal = ({ modal, title, toggle, liveComponent, children }) => (
  <Modal isOpen={modal} toggle={toggle} size="full-screen" modalClassName="modal-black">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
        <i className="tim-icons icon-simple-remove"></i>
      </button>
      <h6 className="modal-title">{title}</h6>
    </div>
    <ModalBody>
      {liveComponent}
      {children}
    </ModalBody>
  </Modal>
)

const MyLiveProvider = ({ mode, code, scope, setMode }) => {
  return (
    <LiveProvider
      code={code}
      scope={scope}
      language={'tsx'}
      transformCode={snippet =>
        window && window.ts && window.ts.transpile(snippet, {
          noImplicitUseStrict: true,
          target: 'es6',
          jsx: 'react'
        })
      }
    >
      {mode === 'closed'
        ? <div className="d-flex justify-content-center">
          <Button color={'warning'} className="animation-on-hover" onClick={() => setMode('both')}>Show live preview</Button>
        </div>
        : <>
          <BootRow style={{ height: '100%' }}>
            {mode !== 'preview' && <Col sm={mode === 'both' ? '7' : '12'} style={{ overflowY: 'auto', height: '100%' }}>
              <LiveEditor language={'tsx'} />
            </Col>}
            {mode !== 'code' && <Col sm={mode === 'both' ? '5' : '12'}>
              <LivePreview language={'tsx'} />
            </Col>}
          </BootRow>
          <BootRow>
            <Col className="pt-3">
              <LiveError language={'tsx'} />
            </Col>
          </BootRow>
          <div className="d-flex justify-content-center">
            <Button color={mode === 'code' && 'info'} className="animation-on-hover" onClick={() => setMode('code')}>Code</Button>
            <Button color={mode === 'both' && 'info'} className="animation-on-hover mx-2" onClick={() => setMode('both')}>Both</Button>
            <Button color={mode === 'preview' && 'info'} className="animation-on-hover" onClick={() => setMode('preview')}>Preview</Button>
          </div>
        </>
      }
    </LiveProvider>
  )
}