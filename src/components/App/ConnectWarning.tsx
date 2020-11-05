import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Alert from 'react-bootstrap/Alert'
import networks from './networks'
import explorer from 'media/gifs/explorer.gif'

const ethNetworkId = process.env.REACT_APP_ETH_NETWORK_ID as string
const arbNetworkId = process.env.REACT_APP_ARB_NETWORK_ID as string

const CopyLink = ({ url, msg }: { url: string; msg: string }) => {

  const onClick = (e: any) => {
    e.preventDefault()
    copyTextToClipboard(url)
    alert(msg)
  }
  return (
    <a href="" onClick={onClick}>
      {url}
    </a>
  )
}

export default () => {
  const network = networks[+ethNetworkId]
  const arbnetwork = networks[+arbNetworkId]

  const l1NetworkName = networks[+ethNetworkId].name
  const l2NetworkName = networks[+arbNetworkId].name
  return (
    <Container>
      <Alert variant={'primary'}>
        {' '}
        {`Connect to ${l1NetworkName} for L1 actions or ${l2NetworkName} for L2 actions`}
      </Alert>
      <Row className="text-center">
        <Col>
          {' '}
          <div style={styles.upperSecton}>
            <div style={styles.headerStyle}>
              {' '}
              Connect to {l1NetworkName} (deposit into Arbitrum)
            </div>
            <div style={styles.textStyle}>
              {' '}
              Connect to Kovan test work to deposit ETH/tokens into Arbitrum
            </div>
          </div>
          <div>
            <img style={styles.gifStyle} src={network.gif} />
          </div>
        </Col>
        <Col>
          <div style={styles.upperSecton}>
            <div style={styles.headerStyle}>
              {' '}
              Connect to {l2NetworkName}, v2 or v1 (withdraw from Arbitrum)
            </div>
            {/* <Col> */}
            <div style={styles.textStyle}>
              {' '}
              Connect to
              <a
                href="https://developer.offchainlabs.com/docs/Developer_Quickstart/"
                target="_blank"
              >
                {' '}
                your own aggregator
              </a>{' '}
              or to our publically hosted nodes via custom RPC:<br/>{' '}
              <CopyLink
                url={"https://kovan2.arbitrum.io/rpc"}
                msg="Arbv2 Aggregator url copied to clipboard"
              />{' '} with chain ID    <CopyLink
              url={"152709604825713"}
              msg="Arbv2 Aggregator url copied to clipboard"
            /> for Arbv2 (you probably want this one!) or {" "}
                <CopyLink
                url={"https://node.offchainlabs.com:8547"}
                msg="Arbv1 Aggregator url copied to clipboard"
              /> with chain ID <CopyLink
              url={"215728282823301"}
              msg="Arbv2 Aggregator url copied to clipboard"
            />  for Arbv1.

            </div>
          </div>
          <img
            className="text-center"
            style={styles.gifStyle}
            src={arbnetwork.gif}
          />
        </Col>
        <Col>
          <div style={styles.upperSecton}>
            <div style={styles.headerStyle}>
              {' '}
              <b>Optional</b>: add Arbitrum block explorer URL
            </div>

            <div style={styles.textStyle}>
              Add our custom block explorer url to Arbitrum network:{' '}
              <CopyLink
                url="https://explorer.offchainlabs.com/#"
                msg="Block explorer url copied to clipboard"
              />{' '}
              ('Settings' > 'Networks' > 'Arbitrum' > 'Block Explorer URL
              (optional)')
            </div>
          </div>
          <img className="text-center" style={styles.gifStyle} src={explorer} />
          {/*  */}
          {/* </Row> */}
        </Col>
      </Row>
    </Container>
  )
}

const styles = {
  gifStyle: { maxWidth: 160, border: '1px solid black' },
  textStyle: { fontSize: '10px' },
  headerStyle: {
    fontSize: '12px',
    fontWeight: 500,
    minHeight: 30,
    marginBottom: 10,
    marginTop: 10
  },
  upperSecton: { minHeight: 120, justifyContent: 'center' }
}

const copyTextToClipboard = (str: string) => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
