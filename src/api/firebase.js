// firebase/app 모듈 불러오기
// auth, firestore
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase 앱 구성 (객체)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: 'movie-finder-2021.firebaseapp.com',
  projectId: 'movie-finder-2021',
  storageBucket: 'movie-finder-2021.appspot.com',
  messagingSenderId: '985270786487',
  appId: '1:985270786487:web:7f68c0a604485e81fd7032'
};

// firebase app 초기화
firebase.initializeApp(firebaseConfig);

// export modules

// 내보내기
// 인증 객체
export const auth = firebase.auth();

// auth.languageCode = 'ko';

// 기기에 현재 사용중인 언어로 설정
auth.useDeviceLanguage();

//  데이터베이스 객체
export const firestore = firebase.firestore();

// firebase app 기본 내보내기
export default firebase;

// Google Authentication Provider

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const signInGoogle = () => auth.signInWithPopup(googleAuthProvider);

// 로그아웃 유틸리티
export const signOut = () => auth.signOut();
