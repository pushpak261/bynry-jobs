import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import SearchBar from '../components/SearchBar';

const HomePage = ({ profiles }) => {
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [filteredProfiles, setFilteredProfiles] = useState(profiles);

    const handleSummaryClick = (address) => {
        setSelectedAddress(address);
    };

    const handleSearch = (query) => {
        const filtered = profiles.filter((profile) =>
            profile.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProfiles(filtered);
    };

    return (
        <div className="home-page">
            <h1>Profiles</h1>
            <SearchBar onSearch={handleSearch} />
            <div className="profile-list">
                {filteredProfiles.map((profile) => (
                    <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onSummaryClick={handleSummaryClick}
                    />
                ))}
            </div>
            {selectedAddress && <MapComponent address={selectedAddress} />}
        </div>
    );
};

export default HomePage;