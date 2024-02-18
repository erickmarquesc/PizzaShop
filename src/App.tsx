import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'

import './global.css'

export const App = () => {
  return <RouterProvider router={router} />
}
