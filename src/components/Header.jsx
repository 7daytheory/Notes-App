import React from "react";

function Header() {
  return (
    <header>
      <h1>Keeper</h1>
      <p style={{fontStyle: 'italic', fontSize: '12px', marginTop: '10px'}}>
        Notes will be removed when refreshed so no one can store rude content on my site
      </p>
    </header>
  );
}

export default Header;
