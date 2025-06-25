import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Amateur = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      padding: '20px',
      color: '#fff',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        marginBottom: '32px'
      }}>        
        <img 
          src="/src/assets/amateur.jpg"
          alt="Amateur Banner"
          style={{
            width: '100%',
            height: '500px',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          padding: '32px'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Amateur (2025)</h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ 
              background: '#fbbf24', 
              color: '#000', 
              padding: '4px 12px', 
              borderRadius: '16px',
              fontWeight: 'bold'
            }}>
              75%
            </span>
            <span>1h 57m</span>
            <span>Drama, Sport</span>
          </div>          
          <button 
            onClick={() => {
              window.open('https://www.youtube.com/watch?v=DCWcK4c-F8Q&pp=ygULdGhlIGFtYXRldXI%3D', '_blank');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fbbf24',
              color: '#000',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '24px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <FaPlay /> Play Trailer
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div style={{
        background: '#1e1e1e',
        borderRadius: '16px',
        padding: '32px',
        marginBottom: '32px'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '16px',
          color: '#fbbf24'
        }}>Overview</h2>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
          After a young basketball prodigy is discovered on social media, he is recruited to an elite prep school where he must navigate a new life balancing basketball, academics, and relationships. The film explores themes of ambition, sacrifice, and what it means to chase your dreams while staying true to yourself.
        </p>
      </div>

      {/* Credits Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }}>
        {/* Cast Members */}
        <div style={{ background: '#1e1e1e', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ color: '#fbbf24', marginBottom: '16px' }}>Cast</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>Michael Rainey Jr. as Terron Forte</li>
            <li style={{ marginBottom: '12px' }}>Deja Monique Cruz as Crystal</li>
            <li style={{ marginBottom: '12px' }}>Brian White as Coach Kenny</li>
            <li style={{ marginBottom: '12px' }}>Sharon Leal as Tamika Forte</li>
          </ul>
        </div>

        {/* Crew Members */}
        <div style={{ background: '#1e1e1e', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ color: '#fbbf24', marginBottom: '16px' }}>Crew</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>Ryan Koo - Director</li>
            <li style={{ marginBottom: '12px' }}>Ryan Koo - Screenplay</li>
            <li style={{ marginBottom: '12px' }}>Jason Michael Berman - Producer</li>
            <li style={{ marginBottom: '12px' }}>Mark Holden - Music</li>
          </ul>
        </div>

        {/* Movie Details */}
        <div style={{ background: '#1e1e1e', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ color: '#fbbf24', marginBottom: '16px' }}>Details</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>Release Date: March 6, 2025</li>
            <li style={{ marginBottom: '12px' }}>Runtime: 117 minutes</li>
            <li style={{ marginBottom: '12px' }}>Language: English</li>
            <li style={{ marginBottom: '12px' }}>Platform: Netflix</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Amateur;