import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


const Hotal = () => {



  


  return (
    <div>
        <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://source.unsplash.com/600x700/?hotels" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

    </div>
  )
}

export default Hotal