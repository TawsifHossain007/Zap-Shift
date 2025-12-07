import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';

const AdminRoutes = ({children}) => {
    const {loading} = useAuth()
    const {role,roleLoading } = useRole()

    if(loading || roleLoading){
        return <div className='flex item-center justify-center min-h-screen'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }

    if (role !== 'admin') {
        return <p>Forbidden Access</p>
    }

    return children;
};

export default AdminRoutes;