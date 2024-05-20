import React from 'react'
import Navbar from '../../components/Navbar'
import { Navigate, Outlet } from 'react-router-dom'

const Dashboard = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to="/" replace />;
      }
    return (
        <div>
            <Navbar />
            <div style={{textAlign: 'none'}}>
                <Outlet/>
            </div>x   
        </div>
    )
}

export default Dashboard
