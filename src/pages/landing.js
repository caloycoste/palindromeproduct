import React, { useState } from 'react'
import { Container, Row, Button, Form } from 'react-bootstrap'

import { isPalindrome, getHighestPalindrome } from '../handlers/handlers'

const Landing = () => {

  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState()
  const [values, setValues] = useState()

  const getPalindrome = () => {
    setLoading(true)
    let palindromes = []
    for (let first = 100; first <= 999; first++) {
      for (let second = 100; second <= 999; second++) {
        let product = first * second
        if (isPalindrome(product)) {
          palindromes.push({ product: product, first: first, second: second })
        }
      }
    }
    const { answer, values } = getHighestPalindrome(palindromes)
    setAnswer(answer)
    setValues(values)
    setLoading(false)
  }

  const resetPalindrome = () => {
    setAnswer()
    setValues()
  }

  return (
    <Container fluid style={{ backgroundColor: '#EFEFEF', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Row className='mb-5 w-75'>
        <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Largest palindrome from the product of two 3-digit numbers</h1>
      </Row>
      {loading && <p>Getting highest palindrome...</p>}
      {answer && values && (
        <Row className='d-flex justify-content-center mb-5'>
          <Form className='d-flex flex-column justify-content-center align-items-center'>
            <Form.Control
              style={{ minWidth: '30vw', fontSize: '4rem', textAlign: 'center' }}
              disabled
              defaultValue={answer}
            />
            <Form.Label>Highest value is a product of {values?.first} and {values?.second}.</Form.Label>
          </Form>
        </Row>
      )}
      <Row className='d-flex justify-content-center'>
        <Button variant='blue-fill' onClick={answer && values ? resetPalindrome : getPalindrome}>{answer && values ? 'Clear' : 'Get palindrome'}</Button>
      </Row>
    </Container>
  );
}

export default Landing;