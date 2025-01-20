import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/ProfileCard.css';

const ProfileCard = ({ profile, onSummaryClick }) => {
    return (
        <div className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => onSummaryClick(profile.address)}>Summary</button>
            <Link to={`/profile/${profile.id}`}>View Details</Link>
        </div>
    );
};

export default ProfileCard;