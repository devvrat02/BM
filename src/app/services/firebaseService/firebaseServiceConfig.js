const prodConfig = {
  apiKey: "AIzaSyDlwr2pjkKLI5OKlGNE0JETpv_gNqg0QJg",
  authDomain: "esaf-4f70c.firebaseapp.com",
  projectId: "esaf-4f70c",
  storageBucket: "esaf-4f70c.appspot.com",
  messagingSenderId: "914878457148",
  appId: "1:914878457148:web:3d5b75e0e7bdcedf632a39",
  measurementId: "G-XKF8C6XNCG"
};

const devConfig = {
  apiKey: "AIzaSyDlwr2pjkKLI5OKlGNE0JETpv_gNqg0QJg",
  authDomain: "esaf-4f70c.firebaseapp.com",
  projectId: "esaf-4f70c",
  storageBucket: "esaf-4f70c.appspot.com",
  messagingSenderId: "914878457148",
  appId: "1:914878457148:web:3d5b75e0e7bdcedf632a39",
  measurementId: "G-XKF8C6XNCG"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
