import React, { useState } from 'react';
import AdminForm from '../components/AdminForm';

const AdminPanel = ({ profiles, onAddProfile, onEditProfile, onDeleteProfile }) => {
    const [editingProfile, setEditingProfile] = useState(null);

    const handleEdit = (profile) => {
        setEditingProfile(profile);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this profile?')) {
            onDeleteProfile(id);
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <AdminForm
                onAddProfile={onAddProfile}
                onEditProfile={onEditProfile}
                editingProfile={editingProfile}
                setEditingProfile={setEditingProfile}
            />
            <div className="profile-list">
                {profiles.map((profile) => (
                    <div key={profile.id} className="profile-card">
                        <h3>{profile.name}</h3>
                        <p>{profile.description}</p>
                        <p>{profile.address}</p>
                        <div className="button-container">
                            <button className="edit-button" onClick={() => handleEdit(profile)}>
                                Edit
                            </button>
                            <button className="delete-button" onClick={() => handleDelete(profile.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanel;