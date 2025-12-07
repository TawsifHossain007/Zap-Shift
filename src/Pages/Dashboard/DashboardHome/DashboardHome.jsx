import React from 'react';
import useRole from '../../../Hooks/useRole';
import AdminDashboardHome from './AdminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';

const DashboardHome = () => {

    const {role, roleLoading} = useRole()
    if(roleLoading){
        <div className='flex items-center justify-center'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }

    if(role === 'admin'){
        return <AdminDashboardHome></AdminDashboardHome>
    }
    else if(role === 'rider'){
        return <RiderDashboardHome></RiderDashboardHome>
    }
    else if(role === 'user'){
        return <UserDashboardHome></UserDashboardHome>
    }



    return (
        <div>
            <h2>dashboard Home</h2>
        </div>
    );
};

export default DashboardHome;