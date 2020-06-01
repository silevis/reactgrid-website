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
      <Container style={{ borderRadius: '5px', backgroundColor: '#0f102c' }} className='p-3 pb-5'>
        <BootRow className={'pb-3'}>
          <Col className={'d-flex align-items-center'} sm={'7'}>
            <h6 className='p-0 m-0'>{title}</h6>
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
    <div className="modal-header align-items-stretch">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
        <i className="tim-icons icon-simple-remove"></i>
      </button>
      <h3 className="modal-title pt-2">{title}</h3>
    </div>
    <ModalBody style={{ height: 0 }}>
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
          <BootRow className='h-100 live-editor-row'>
            {mode !== 'preview' && <Col sm={mode === 'both' ? '7' : '12'} className='h-100 overflow-y-auto'>
              <LiveEditor language={'tsx'} />
            </Col>}
            {mode !== 'code' && <Col sm={mode === 'both' ? '5' : '12'}>
              <LivePreview language={'tsx'} />
              <LiveError language={'tsx'} />
            </Col>}
          </BootRow>
          <BootRow className="justify-content-center">
            <Button color={mode === 'code' && 'info'} className="animation-on-hover" onClick={() => setMode('code')}>Code</Button>
            <Button color={mode === 'both' && 'info'} className="animation-on-hover mx-2" onClick={() => setMode('both')}>Both</Button>
            <Button color={mode === 'preview' && 'info'} className="animation-on-hover" onClick={() => setMode('preview')}>Preview</Button>
          </BootRow>
        </>
      }
    </LiveProvider >
  )
}