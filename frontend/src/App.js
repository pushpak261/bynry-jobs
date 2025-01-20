import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfileDetails from './pages/ProfileDetails';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import profilesData from './data/profiles.json';

const App = () => {
    const [profiles, setProfiles] = useState(profilesData);

    const handleAddProfile = (newProfile) => {
        const profileWithId = { ...newProfile, id: profiles.length + 1 };
        setProfiles([...profiles, profileWithId]);
    };

    const handleEditProfile = (updatedProfile) => {
        const updatedProfiles = profiles.map((profile) =>
            profile.id === updatedProfile.id ? updatedProfile : profile
        );
        setProfiles(updatedProfiles);
    };

    const handleDeleteProfile = (id) => {
        const updatedProfiles = profiles.filter((profile) => profile.id !== id);
        setProfiles(updatedProfiles);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage profiles={profiles} />} />
                <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
                <Route
                    path="/admin"
                    element={
                        <AdminPanel
                            profiles={profiles}
                            onAddProfile={handleAddProfile}
                            onEditProfile={handleEditProfile}
                            onDeleteProfile={handleDeleteProfile}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;