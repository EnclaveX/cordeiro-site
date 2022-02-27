const language = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        getLanguage() {
            console.log('getLanguage')
        }
    },
    actions: {
        getLanguage(state, payload) {
            state.commit('getLanguage', payload)
        }
    }
}

export {
    language
}
