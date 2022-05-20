import React from 'react'
import mobile from '../img/mobile.jpeg';
import { Button, Card } from 'react-bootstrap'
function Produktsida() {
  return (
    <div>
      <Card>
        <Card.Title>Produktsida </Card.Title>
        <Card.Text>3999:-</Card.Text>

        <Card.Img variant='top' src={mobile} style={{ width: '18rem' }} alt='mobile phone' />
      </Card>
      <Card>
        <Card.Body>Lorem ipsum</Card.Body>
      </Card>
      <Button variant='success'>LÄGG I VARUKORG</Button>





    </div>

  )
}

export default Produktsida