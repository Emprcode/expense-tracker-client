import React from 'react'
import { Form } from 'react-bootstrap'

export const CustomField = ({forwaredRef, label, ...rest}) => {
  return (
    <Form.Group className="mb-3" >
    <Form.Label>{label}</Form.Label>
    <Form.Control ref={forwaredRef}{...rest} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  )
}
