import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDeO5kKTW8ZkDEDaopl-tLwQNYMZM-Dq0M",
  authDomain: "teams-project-d3a70.firebaseapp.com",
  databaseURL: "https://teams-project-d3a70-default-rtdb.firebaseio.com",
  projectId: "teams-project-d3a70",
  storageBucket: "teams-project-d3a70.appspot.com",
  messagingSenderId: "975712596301",
  appId: "1:975712596301:web:a0dea2623628dc2c0b4704",
  measurementId: "G-C6X8DV0LQR",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
