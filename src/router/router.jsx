import { createRoutesFromChildren, Route, createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Dashboard from '../pages/Dashboard';
import Payments from '../pages/Payments';
import Professionals from '../pages/Professional/Professionals';
import Reports from '../pages/Reports';
import User from '../pages/User/User';
import CardsDetail from '../pages/User/CardsDetail';
import ProDetail from '../pages/Professional/ProDetail';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="user" element={<User />} />
        <Route path="payment" element={<Payments />} />
        <Route path="professionals" element={<Professionals />} />
        <Route path="reports" element={<Reports />} />
        <Route path='cartsdetail' element={<CardsDetail />} />
        <Route path='prodetail' element={<ProDetail />} />
      </Route>
    </>
  )
);

export default router
