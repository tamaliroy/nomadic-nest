import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded components for better performance
const UserProfile = lazy(() => import("../userprofile"));
const Dashboard = lazy(() => import("../Dashboard"));
const Destination = lazy(() => import("../Destination"));
const TripDetails = lazy(() => import("../TripDetails"));
const Trips = lazy(() => import("../Trips"));
const Explore = lazy(() => import("../Explore"))

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/destination/:id" element={<Destination />} />
            <Route path="/tripDetails/:id" element={<TripDetails />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="*" element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes;