
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, GridRow } from 'semantic-ui-react'

const Login = () => (
  <Grid verticalAlign='middle' textAlign='center' style={{ height: '100vh', width:450 }}>
    <Grid.Column >
      <Grid.Row>
        <div>

        </div>
      <Header as='h2' color='teal' textAlign='left'>
        Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      </Grid.Row>
    </Grid.Column>
  
  </Grid>

)

export default Login

