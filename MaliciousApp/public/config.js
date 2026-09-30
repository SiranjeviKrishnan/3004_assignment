//end point

const CONFIG = {
  targets: {
    vulnerable: {
      url: 'http://127.0.0.1:5000/change-email',
      fields: { email: 'hacker@evil-corp.net' },
    },
  },

  defaultTarget: 'vulnerable',
  showExplainer: false,
  connectDelay: 2600,
};
