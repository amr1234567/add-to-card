import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LogIn from './LogIn.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.jsx'
import Cards from './Cards.jsx'
import { Link } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
    errorElement: <div> <h1>Wrong url</h1> <Link to={'/'}>go to here</Link></div>
  }, {
    path: '/main',
    element: <App />
  }, {
    path: 'cards',
    element: <Cards />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
