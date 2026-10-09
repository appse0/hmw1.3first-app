import React from 'react';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '19px 155px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
                <img src="./public/logo.svg" alt="Logo" />
                <ul style={{ display: 'flex', listStyleType: 'none', gap: '24px' }}>
                    <li style={{ color: '33383F', fontSize: '15px' }}>Features</li>
                    <li style={{ color: '33383F', fontSize: '15px' }}>Pricing</li>
                    <li style={{ color: '33383F', fontSize: '15px' }}>Integrations</li>
                    <li style={{ color: '33383F', fontSize: '15px' }}>Learn</li>
                </ul>
            </div>
            <div>
                <button style={{ backgroundColor: 'transparent', color: '#0070A0', border: 'none', padding: '10px 20px', fontSize: '15px', lineHeight: '24px', letterSpacing: '0.2px' }}>Sign in</button>
                <button style={{ backgroundColor: '#0070A0', color: 'white', border: 'none', padding: '6px 20px', fontSize: '15px', lineHeight: '24px', letterSpacing: '0.2px' }}>Book a demo </button>
            </div>
        </header> 
    )
}

export default Header;