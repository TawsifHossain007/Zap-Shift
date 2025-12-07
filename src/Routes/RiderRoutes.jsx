import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const RiderRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || !user || roleLoading) {
    return (
      <div className="flex item-center justify-center min-h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }
  if (role !== "rider") {
    return <p>Forbidden Access</p>
  }

  return children;
};

export default RiderRoutes;
