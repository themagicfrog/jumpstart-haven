'use client';

const linkStyle = { color: 'white', textDecoration: 'underline' };

export default function Footer() {
  return (
    <footer>
      <div className="footer-content" style={{ backgroundColor: '#071540', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.25rem' }}>
        <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', letterSpacing: '0.1rem' }}>
          Contact: estella@hackclub.com or{' '}
          <a
            href="https://app.slack.com/client/E09V59WQY1E/C0BRKUKHCJW"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            #jumpstart-haven
          </a>
        </p>
        <p style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', letterSpacing: '0.1rem' }}>
          <a href="https://haven.hackclub.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Haven</a>
          {'  '}
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Hack Club</a>
        </p>
      </div>
    </footer>
  );
}
