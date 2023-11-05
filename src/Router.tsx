import { Routes, Route } from 'react-router-dom'
import ListCompanies from './pages/ListCompanies'
import Home from './pages/Home'
import DataCompanies from './pages/DataCompanies'

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListCompanies' element={<ListCompanies />}/>
        <Route path='/DataCompanies' element={<DataCompanies />} />
        <Route path='/DataCompanies/:id' element={<DataCompanies />} />
    </Routes>
  )
}

export default Router