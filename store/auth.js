export const state = () => ({
  userInfo: {
    name: "",
    email: "",
    detail: ""
  },
  adminInfo: {
    name: "",
    email: "",
    detail: ""
  },
});

export const getters = {

}

export const mutations = {
  // 유저 정보 초기화
  initUserInfo (state, {name, email, detail}) {
    state.userInfo.name = name;
    state.userInfo.email = email;
    state.userInfo.detail = detail;
  },

  // 관리자 정보 초기화
  initAdminInfo (state, {name, email, detail}) {
    state.adminInfo.name = name;
    state.adminInfo.email = email;
    state.adminInfo.detail = detail;
  }
};

export const actions = {
// Vusqa 로그인 혹은 다른 소셜 아이디 로그인을 바탕으로 회원가입을 수행 -> 소셜 아이디로 로그인하는거라면 따로 계정 생성절차를 거치지는 않고 유저 데이터베이스상에 데이터를 저장하도록함
  async vusqaSignUp ({ commit }, { email, password }) {
    
    console.log(email, password);

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      commit('loginIn', {email})
    }).catch(err => {
      console.log('login Failed');
      console.log(err);
    });

  },

  // 로그인 함수 - 파이어베이스 authenticate 서비스와 통신하여 특정 계정의 상태를 로그인 상태로 변경합니다.
  async vusqaLogIn ({ commit }, { email, password }) {
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      
    }).catch(err => {
      console.log('login Failed');
      console.log(err);
    });

  },
  
  // 로그인 함수 - 파이어베이스 authenticate 서비스와 통신하여 특정 계정의 상태를 로그아웃 상태로 변경합니다.
  async vusqaLogOut () {
    auth.signOut().then(res => {
      console.log('user signed out');
      console.log(res);
    }).catch(err => {
      console.log('logout failed');
      console.log(err);
    })
  },

  // 구글 계정으로 로그인
  async googleSignIn () {
    
    auth.signInWithPopup(provider).then(res => {
      console.log('Success!');
      console.log(res);

    }).catch(err => {
      console.log('failed!');
      console.log(err);
    })
  },

  // 이메일과 UID를 받아서 파이어베이스 보안 서버와 통신하여 해당 계정의 권한을 Admin 으로 상승시킵니다.
  async addAdminRole ({ commit }, { admin_email, uid }) {
    const starter = functions.httpsCallable('addAdminRole');

    // 넘겨주는 객체가 data 객체가 됩니다.
    starter({ email: admin_email });
  }
};