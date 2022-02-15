import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop'
import SignIn from '../pages/signIn/SignIn'

import PageNotFound from '../pages/PageNotFound/PageNotFound'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/signin' element={<SignIn></SignIn>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Router
