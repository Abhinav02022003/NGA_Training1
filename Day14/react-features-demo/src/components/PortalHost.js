import React, { useEffect } from 'react';

const PortalHost = ({ children }) => {
  useEffect(() => {
    // Create a new div if it doesn't exist
    let portalRoot = document.getElementById('portal-root');
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.id = 'portal-root';
      document.body.appendChild(portalRoot);
    }
  }, []);

  return <>{children}</>;
};

export default PortalHost;
