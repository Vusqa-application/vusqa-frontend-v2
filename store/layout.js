export const state = () => ({
  front_page: {
    reading_mode: false
  },
  search_page: {

  }
});

export const getters = {

}

export const mutations = {
  changePageMode (state, {page, target, data}) {
    state[page][target] = data;
  }
};

export const actions = {

};