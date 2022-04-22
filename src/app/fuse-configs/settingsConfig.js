const settingsConfig = {
  layout: {
    style: 'layout1', // layout1 layout2 layout3
    config: {}, // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  direction: 'ltr', // rtl, ltr
  theme: {
    // main: 'alpha',
    // navbar: 'alpha',
    // toolbar: 'alpha',
    // footer: 'alpha',light1
    // main: 'defaultDark',
    // navbar: 'defaultDark',
    // toolbar: 'defaultDark',
    // footer: 'defaultDark',
    main: 'light1',
    navbar: 'light1',
    toolbar: 'light1',
    footer: 'light1',
  },
  loginRedirectUrl: '/', // Default redirect url for the logged-in user
};

export default settingsConfig;
