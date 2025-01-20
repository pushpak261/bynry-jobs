import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
    const { id } = useParams();
    const profile = profiles.find((p) => p.id === parseInt(id));

    if (!profile) {
        return <div>Profile not found</div>;
    }

    const interests = Array.isArray(profile.interests) ? profile.interests : [];

    return (
        <div className="profile-details">
            <h1>{profile.name}</h1>
            <img src={profile.photo} alt={profile.name} />
            <p>{profile.description}</p>
            <p>Contact: {profile.contact}</p>
            <p>Interests: {interests.join(', ')}</p>
        </div>
    );
};

export default ProfileDetails;