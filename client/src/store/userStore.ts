import { getDataAPI, patchDataAPI, postDataAPI } from "../utils/fetchData"
import { GlobalStoreState, IUserState } from "../utils/interface"

interface ILoginData {
  email: string
  password: string
}

const userState: IUserState = {
  data: {},
  loading: true
}

const userStore = (set: any) => {
  return {
    userState,
    login: async(data: ILoginData) => {
      set((state: GlobalStoreState) => {
        state.userState.loading = true
      }, false, 'login/loading')

      try {
        const res = await postDataAPI('user/login', data)

        set((state: GlobalStoreState) => {
          state.userState.data = {
            user: res.data.user,
            accessToken: res.data.accessToken
          }

          state.userState.loading = false
          state.alertState.message = res.data.msg
          state.alertState.type = 'success'
        }, false, 'login/success')

        localStorage.setItem('fp_auth_status', 'Y')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.userState.loading = false
          state.userState.data = {}
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
        }, false, 'login/error')
      }
    },
    refreshToken: async() => {
      set((state: GlobalStoreState) => {
        state.userState.loading = true
      }, false, 'refresh_token/loading')

      const getLsAuth = localStorage.getItem('fp_auth_status')
      if (!getLsAuth || getLsAuth !== 'Y') {
        set((state: GlobalStoreState) => {
          state.userState.loading = false
        }, false, 'refresh_token/done_loading')
        return
      }

      try {
        const res = await getDataAPI('user/refreshToken')

        set((state: GlobalStoreState) => {
          state.userState.data = {
            accessToken: res.data.accessToken,
            user: res.data.user
          }
        }, false, 'refresh_token/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.userState.data = {}
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
        }, false, 'refresh_token/error')
      }

      set((state: GlobalStoreState) => {
        state.userState.loading = false
      }, false, 'refresh_token/done_loading')
    },
    logout: async() => {
      try {
        const res = await getDataAPI('user/logout')

        set((state: GlobalStoreState) => {
          state.userState.data = {}
          state.alertState.message = res.data.msg
          state.alertState.type = 'success'
        }, false, 'logout/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
        }, false, 'logout/error')
      }
    },
    editProfile: async(name: string, avatar: File[], newAvatar: string, token: string) => {
      const formData = new FormData()

      formData.append('name', name)

      if (avatar.length > 0)
        formData.append('avatar', avatar[0])
      else
        formData.append('avatar', newAvatar)

      try {
        const res = await patchDataAPI('user/editProfile', formData, token)

        set((state: GlobalStoreState) => {
          state.userState.data = {
            ...state.userState.data,
            user: res.data.user
          }
          state.alertState.message = res.data.msg
          state.alertState.type = 'success'
        }, false, 'edit_profile/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
        }, false, 'edit_profile/error')
      }
    }
  }
}

export default userStore