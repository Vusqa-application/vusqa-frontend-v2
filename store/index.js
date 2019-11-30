// 파이어베이스 서비스 제어 객체를 불러옴. 이 객체를 이용해서 파이어베이스 백엔드와 통신합니다.
import { db, auth, provider, functions } from '~/fb.js';

// ------------------ 중앙 스토어의 상태 데이터의 집합 <- 이 데이터의 변경 사항이 UI 상에 반영됩니다.
export const state = () => ({
  
  
  
});

export const getters = {

}

// ---------- 상태를 변경하는 로직이 담겨 있는 함수들입니다.
export const mutations = {
  


};


// ------------ 비동기 통신(어플리케이션의 동작과는 별개로 이루어지는 외부 데이터베이스 서버와의 통신) 로직을 담은 함수들입니다.
export const actions = {
  async nuxtServerInit () {
  }
};