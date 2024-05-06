import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useStore } from './hooks/useStore'

import { Container, Row, Col } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'

function App() {
  const {fromLang, toLang, swapLang, changeFromLang} = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
        <h2>From</h2>
        {fromLang}
        </Col>

        <Col>
          <button disabled={fromLang === AUTO_LANGUAGE} onClick={swapLang}>Interchange</button>
        </Col>
        
        <Col>
          <h2>To</h2>
          {toLang}
        </Col>
      </Row>

    </Container>
  )
}

export default App
