import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Final_Dest = () => {
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
          src="/src/assets/final.jpg"
          alt="Final Destination Banner"
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
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Final Destination Bloodlines (2025)</h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ 
              background: '#fbbf24', 
              color: '#000', 
              padding: '4px 12px', 
              borderRadius: '16px',
              fontWeight: 'bold'
            }}>
              62%
            </span>
            <span>1h 32m</span>
            <span>Horror, Mystery, Thriller</span>
          </div>          
          <button 
            onClick={() => {
              window.open('https://www.youtube.com/watch?v=UWMzKXsY9A4&pp=ygUedHJhaWxlciBmaW5hbCBkZXN0aW5hdGlvbiAyMDI1', '_blank');
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
          In this fifth installment of the Final Destination series, Death is just as omnipresent as ever, and is unleashed after one man's premonition saves a group of coworkers from a terrifying suspension bridge collapse. But this group of unsuspecting souls was never supposed to survive, and, in a terrifying race against time, the ill-fated group frantically tries to discover a way to escape Death's sinister agenda.
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
            <li style={{ marginBottom: '12px' }}>Nicholas D'Agosto as Sam Lawton</li>
            <li style={{ marginBottom: '12px' }}>Emma Bell as Molly Harper</li>
            <li style={{ marginBottom: '12px' }}>Miles Fisher as Peter Friedkin</li>
            <li style={{ marginBottom: '12px' }}>Ellen Wroe as Candice Hooper</li>
          </ul>
        </div>

        {/* Crew Members */}
        <div style={{ background: '#1e1e1e', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ color: '#fbbf24', marginBottom: '16px' }}>Crew</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>Steven Quale - Director</li>
            <li style={{ marginBottom: '12px' }}>Eric Heisserer - Screenplay</li>
            <li style={{ marginBottom: '12px' }}>Jeffrey Reddick - Characters</li>
            <li style={{ marginBottom: '12px' }}>Brian Tyler - Music</li>
          </ul>
        </div>

        {/* Movie Details */}
        <div style={{ background: '#1e1e1e', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ color: '#fbbf24', marginBottom: '16px' }}>Details</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>Release Date: June 20, 2025</li>
            <li style={{ marginBottom: '12px' }}>Runtime: 92 minutes</li>
            <li style={{ marginBottom: '12px' }}>Budget: $40 million</li>
            <li style={{ marginBottom: '12px' }}>Box Office: $157.9 million</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Final_Dest;