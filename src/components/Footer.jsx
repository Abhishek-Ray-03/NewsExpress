const Footer = () => {
    return (
      <nav
        className="navbar bg-primary"
        data-bs-theme="dark"
        style={{
          color: 'white',
          width: '100%',
          height:'4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0.5rem 0 2rem 0',
        }}
      >
        <div>
          <h6>Made by Abhishek Ray!</h6>
          <p>&#169; All Rights Reserved.</p>
        </div>
      </nav>
    );
  };
  
  export default Footer;
  