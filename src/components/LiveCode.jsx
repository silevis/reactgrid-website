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
} from "reactstrap";
import { ReactGrid } from "@silevis/reactgrid";

export const LiveCode = ({ code }) => {
  const scope = { ReactGrid };

  const [mode, setMode] = React.useState(() => ('closed'));

  return <>
    <Container style={{ borderRadius: '5px', backgroundColor: '#0f102c', padding: '10px' }}>
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
            <BootRow style={{ height: '400px' }}>
              {mode !== 'preview' && <Col sm={mode === 'both' ? '7' : '12'}>
                {<div style={{ height: '400px', overflowY: 'scroll' }}>
                  <LiveEditor language={'tsx'} />
                </div>}
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

    </Container>
  </>
}