import React from 'react';

export default function Footer() {
  return (<center>
    <footer>
      {/* <p>© 2025 Ravikumar S. </p> */}
      <div className="container small">
        © {new Date().getFullYear()} Ravikumar — Built with ♥ • UI/UX & Full-Stack ! All rights reserved.
      </div>
    </footer></center>
  );
}