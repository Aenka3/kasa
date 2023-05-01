import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Housing from './pages/Housing';
import Error404 from './pages/Error404';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
		errorElement: <Error404/>
	},
	{
		path: "/housing/:id",
		element: <Housing/>,
		errorElement: <Error404/>
	},
	{
		path: '/aboutus',
		element: <AboutUs/>,
		errorElement: <Error404/>
	},
	{
		path: "*",
		element: <Error404/>
	}
]);

export default router;