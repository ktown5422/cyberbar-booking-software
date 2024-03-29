import { createStore, action } from 'easy-peasy'

// this is a comment

export default createStore({
    login: {
      loggedIn: false,
      setLoggedIn: action((state) => {
        state.loggedIn = true
      }),
    },
    modals: {
        showModal: false,
        showLoginModal: false,
        showRegistrationModal: false,
        setShowModal: action((state) => {
          state.showModal = true
        }),
        setHideModal: action((state) => {
          state.showModal = false
        }),
        setShowLoginModal: action((state) => {
          state.showModal = true
          state.showLoginModal = true
          state.showRegistrationModal = false
        }),
        setShowRegistrationModal: action((state) => {
          state.showModal = true
          state.showLoginModal = false
          state.showRegistrationModal = true
        }),
      },
})
