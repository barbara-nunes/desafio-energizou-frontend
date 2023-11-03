import { Routes, Route } from 'react-router-dom'
import ListCompanies from './pages/ListCompanies'
import Home from './pages/Home'
import NewCompanies from './pages/NewCompanies'

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListCompanies' element={<ListCompanies />}/>
        <Route path='/NewCompanies' element={<NewCompanies />} />
    </Routes>
  )
}

export default Router