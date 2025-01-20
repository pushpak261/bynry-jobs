import React, { useState, useEffect } from 'react';
import './../styles/AdminForm.css';
const AdminForm = ({ onAddProfile, onEditProfile, editingProfile, setEditingProfile }) => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [interests, setInterests] = useState('');

    useEffect(() => {
        if (editingProfile) {
            setName(editingProfile.name);
            setPhoto(editingProfile.photo);
            setDescription(editingProfile.description);
            setAddress(editingProfile.address);
            setInterests(editingProfile.interests.join(', '));
        } else {
            setName('');
            setPhoto('');
            setDescription('');
            setAddress('');
            setInterests('');
        }
    }, [editingProfile]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const interestsArray = interests.split(',').map((interest) => interest.trim());
        const profileData = { name, photo, description, address, interests: interestsArray };

        if (editingProfile) {
            onEditProfile({ ...profileData, id: editingProfile.id });
            setEditingProfile(null);
        } else {
            onAddProfile(profileData);
        }

        setName('');
        setPhoto('');
        setDescription('');
        setAddress('');
        setInterests('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Photo URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Interests (comma-separated)"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                required
            />
            <button type="submit">{editingProfile ? 'Update Profile' : 'Add Profile'}</button>
            {editingProfile && (
                <button type="button" onClick={() => setEditingProfile(null)}>
                    Cancel Edit
                </button>
            )}
        </form>
    );
};

export default AdminForm;
