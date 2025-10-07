import React from 'react';

const Profile: React.FC = () => {
  return (
    <div>
      <h3>Remote 1 - Profile</h3>
      <p>This is the profile page from Remote 1 application.</p>
      <div style={{ maxWidth: '400px', marginTop: '1rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}>
          <h4>User Information</h4>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Role:</strong> Remote 1 User</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;