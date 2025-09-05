import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded components for better performance
const UserProfile = lazy(() => import("../features/profile/components/userprofile"));
const Dashboard = lazy(() => import("../features/dashboard/components/Dashboard"));
const Destination = lazy(() => import("../features/dashboard/components/Destination"));
const TripDetails = lazy(() => import("../features/trips/components/TripDetails"));
const Trips = lazy(() => import("../features/trips/components/Trips"));
const Explore = lazy(() => import("../features/explore"));
const Hotels = lazy(() => import("../features/hotels"));

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
            <Route path="/hotels" element={<Hotels />} />
            <Route path="*" element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes;