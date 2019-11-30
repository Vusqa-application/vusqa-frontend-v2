export const state = () => ({
  presses: {
    biobiochile: {
      thumnail_list: [
        
      ],
      post_list: [

      ]
    },
    cnnchile: {
      thumnail_list: [
        
      ],
      post_list: [
        
      ]
    }
  }
});

export const getters = {

}

export const mutations = {
  // 섬네일 데이터 상태 변경
  pushThumnail (state, {press, category, data}) {
    state.presses[press].thumnail_list.push({
      category,
      press,
      ...data
    });
  },
  // 섬네일 데이터 지우기
  deleteThumnail (state, {press, category, index}) {
    state.presses[press].thumnail_list
  },

  // 포스트 데이터 상태 변경 (로컬에도 캐싱 시켜야 한다. 여러개의 창을 띄울 것을 대비해서 그것도 처리해야 한다.)
  pushPost (state, {press, category, data}) {
    state.presses[press].post_list.push({
      category,
      ...data
    });
  },
  // 포스트 데이터 지우기
  deletePost (state, {press, category, index}) {
    state.presses[press].post_list
  },
};

export const actions = {
// 지정한 언론사의 일정한 수만큼(범위)의 섬네일 데이터를 불러옴.
  async initThumnail ({ commit }, {press, category, limit}) {
    db.collection(press).doc('thumnail_data').collection(category).limit(limit).onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {

        switch (change.type) {
          case 'added':
            const data = {
              id: change.doc.id,
              ...change.doc.data()
            }

            commit('pushThumnail', {
              press, 
              category,
              data
            });
            break;
          case 'modified':
            break;
          case 'removed':
            break;
          default:
            break;
        }
      });
      console.log('done!');
    })
  },

  // 지정한 언론사의 특정한 제목의 포스트 데이터를 불러옴.
  async initPost (press, category, title) {

  },
};