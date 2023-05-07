import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Housing from './pages/Housing';
import Error404 from './pages/Error404';

export default function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter basename="/">
                <div className='page'>
                    <div className='lead'>
                        <Header />
                        <main>
                            <Routes>
                                <Route exact path="/" element={<Home/>}/>
                                <Route
                                    exact
                                    path="/housing/:id"
                                    element={<Housing/>}
                                />
                                <Route exact path="/aboutus" element={<AboutUs/>}/>
                                <Route path="*" element={<Error404/>}/>
                            </Routes>
                        </main>
                    </div>
                    <Footer />
                </div>
			</BrowserRouter>
		</React.StrictMode>
	)
}

/*const router = createBrowserRouter([
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
]);*/