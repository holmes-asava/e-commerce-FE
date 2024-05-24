
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home'
import Product from './page/Product'
import { Container, Grid, Input, Segment } from 'semantic-ui-react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/logiv',
        element: <div>Page2</div>,
      },
    ],
  },
])


export default function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Container style={{marginTop:20}}>
    <div>asdasdas</div>
      </Container>
      <br></br>
  
    </div>
  )
}

