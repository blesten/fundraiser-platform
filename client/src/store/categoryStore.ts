import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from '../utils/fetchData'
import { GlobalStoreState, ICategoryState } from './../utils/interface'

const categoryState: ICategoryState = {
  data: [],
  loading: false
}

const categoryStore = (set: any) => {
  return {
    categoryState,
    createCategory: async(title: string, token: string) => {
      try {
        const res = await postDataAPI('category', { title }, token)

        set((state: GlobalStoreState) => {
          state.alertState.message = res.data.msg
          state.alertState.type = 'success'
          state.categoryState.data = [res.data.category, ...state.categoryState.data]
        }, false, 'create_category/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
        }, false, 'create_category/error')
      }
    },
    readCategory: async() => {
      try {
        set((state: GlobalStoreState) => {
          state.categoryState.loading = true
        }, false, 'read_cateogory/loading')

        const res = await getDataAPI('category')

        set((state: GlobalStoreState) => {
          state.categoryState.loading = false
          state.categoryState.data = res.data.categories
        }, false, 'read_category/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
          state.categoryState.data = []
          state.categoryState.loading = false
        }, false, 'read_category/error')
      }
    },
    updateCategory: async(id: string, title: string, token: string) => {
      try {
        const res = await patchDataAPI(`category/${id}`, { title }, token)
        
        set((state: GlobalStoreState) => {
          state.alertState.message = res.data.msg
          state.alertState.type = 'success'
          state.categoryState.data = state.categoryState.data.map(item => item._id === id ? { ...item, title: res.data.category.title } : item)
        }, false, 'update_category/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
        }, false, 'update_category/error')
      }
    },
    deleteCategory: async(id: string, token: string) => {
      try {
        const res = await deleteDataAPI(`category/${id}`, token)

        set((state: GlobalStoreState) => {
          state.alertState.message = res.data.msg
          state.alertState.type = 'success'
          state.categoryState.data = state.categoryState.data.filter(item => item._id !== id)
        }, false, 'delete_category/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'success'
        }, false, 'delete_category/error')
      }
    }
  }
}

export default categoryStore