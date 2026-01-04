import React from 'react'
import Header from '../components/navbar/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <Header />
            {/* Main content would go here */}
            <div className='mt-[4rem]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
