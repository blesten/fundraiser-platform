import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import alertStore from './alertStore'
import userStore from './userStore'
import fundraiserApprovalStore from './fundraiserApprovalStore'

let combineStores = (set: any) => ({
  ...alertStore(set),
  ...userStore(set),
  ...fundraiserApprovalStore(set)
})

export default create(devtools(combineStores))