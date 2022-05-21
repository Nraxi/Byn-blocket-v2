import React from 'react'
import mobile from '../img/mobile.jpeg';
import { Button, Card, Container, Form } from 'react-bootstrap'
import "../../scss/style.scss";

function Produktsida() {
  return (
    <Container>
      <Form className='produkt-form' >
        <h1>Mobile phone</h1>
        <h2>3999:-</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <label>Kapacitet</label>
      </Form>
      <select className='gb-option'>
        <option>64GB</option>
        <option>128GB</option>
      </select>
      <Button className='buy' variant='success'>LÄGG I VARUKORG</Button>
      <img
        className='mobile-phone'
        src={mobile}
        alt='mobile phone' />
    </Container>










    // <div>
    //   <Card>
    //     <Card.Title>Produktsida </Card.Title>
    //     <Card.Text>3999:-</Card.Text>

    //     <Card.Img variant='top' src={mobile} style={{ width: '18rem' }} alt='mobile phone' />
    //   </Card>
    //   <Card>
    //     <Card.Body>Lorem ipsum</Card.Body>
    //   </Card>

    // </div>

  )
}

export default Produktsida