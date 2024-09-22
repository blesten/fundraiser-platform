import { getDataAPI, patchDataAPI } from '../utils/fetchData'
import { GlobalStoreState, IFundraiserApprovalState } from './../utils/interface'

const fundraiserApprovalState: IFundraiserApprovalState = {
  data: [],
  totalPage: 0,
  loading: false
}

const fundraiserApprovalStore = (set: any) => {
  return {
    fundraiserApprovalState,
    readFundraiser: async(token: string, page: number) => {
      try {
        set((state: GlobalStoreState) => {
          state.fundraiserApprovalState.loading = true
        }, false, 'read_fundraiser/loading')

        const res = await getDataAPI(`fundraiser/admin?page=${page}`, token)

        set((state: GlobalStoreState) => {
          state.fundraiserApprovalState.data = res.data.fundraisers
          state.fundraiserApprovalState.loading = false
          state.fundraiserApprovalState.totalPage = res.data.totalPage
        }, false, 'read_fundraiser/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
          state.fundraiserApprovalState.data = []
          state.fundraiserApprovalState.totalPage = 0
          state.fundraiserApprovalState.loading = false
        }, false, 'read_fundraiser/error')
      }
    },
    updateFundraiser: async(id: string, data: object, token: string) => {
      try {
        const res = await patchDataAPI(`fundraiser/${id}`, data, token)

        set((state: GlobalStoreState) => {
          state.alertState.message = res.data.msg
          state.alertState.type = 'success'
          state.fundraiserApprovalState.data = state.fundraiserApprovalState.data.filter(item => item._id !== id)
        }, false, 'update_fundraiser/success')
      } catch (err: any) {
        set((state: GlobalStoreState) => {
          state.alertState.message = err.response.data.msg
          state.alertState.type = 'error'
        }, false, 'update_fundraiser/error')
      }
    }
  }
}

export default fundraiserApprovalStore