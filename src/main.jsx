import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ProductProvider from './context/ProductProvider'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  </React.StrictMode>,
)
