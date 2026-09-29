// Attack target. Edit this file to point at a different app.
// Serve this portal from 127.0.0.1, not localhost - see docs/SAMESITE-FINDING.md

const CONFIG = {
  targets: {
    // person1's vulnerable Flask app
    vulnerable: {
      url: 'http://127.0.0.1:5000/change-email',
      fields: { email: 'hacker@evil-corp.net' },
    },
    // Gina's hardened version - update the port when she confirms it
    secure: {
      url: 'http://127.0.0.1:5001/change-email',
      fields: { email: 'hacker@evil-corp.net' },
    },
  },

  defaultTarget: 'vulnerable',  // override in the URL with ?target=secure
  showExplainer: false,         // true = show the demo panel + lab banner
  connectDelay: 2600,           // ms of fake "connecting..."
};
