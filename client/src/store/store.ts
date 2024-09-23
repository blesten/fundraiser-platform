import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import userStore from './userStore'
import alertStore from './alertStore'
import categoryStore from './categoryStore'
import fundraiserApprovalStore from './fundraiserApprovalStore'

let combineStores = (set: any) => ({
  ...userStore(set),
  ...alertStore(set),
  ...categoryStore(set),
  ...fundraiserApprovalStore(set)
})

export default create(devtools(combineStores))