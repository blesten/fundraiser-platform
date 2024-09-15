import { PiBankFill } from 'react-icons/pi'
import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import FundraiserAccount from './../components/template/FundraiserAccount'
import Delete from '../components/general/Delete'
import NewAccount from '../components/account/NewAccount'

const WithdrawalAccount = () => {
  const [openDelete, setOpenDelete] = useState(false)
  const [openNewAccount, setOpenNewAccount] = useState(false)

  return (
    <>
      <FundraiserAccount>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium text-lg'>Withdrawal Account</h1>
          <button onClick={() => setOpenNewAccount(true)} className='outline-none flex items-center gap-3 justify-center bg-secondary hover:bg-primary transition text-white text-sm rounded-lg py-3 px-4'>
            <PiBankFill />
            <p>New Account</p>
          </button>
        </div>
        <div className='mt-8'>
          <table className='text-sm w-full'>
            <thead>
              <tr className='bg-primary text-white font-medium text-center'>
                <td className='p-3'>No</td>
                <td>Bank Name</td>
                <td>Account Number</td>
                <td>Cardholder Name</td>
                <td>Expired Date</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center bg-gray-100'>
                <td className='p-3'>1</td>
                <td>Bank of ABC</td>
                <td>1234567890</td>
                <td>Lorem Ipsum</td>
                <td>12/28</td>
                <td className='flex mt-2 justify-center'>
                  <div className='font-medium text-xs text-white bg-secondary px-3 py-1 rounded-md w-fit'>Active</div>
                </td>
                <td>
                  <FaTrash onClick={() => setOpenDelete(true)} className='text-red-500 m-auto cursor-pointer' />
                </td>
              </tr>
              <tr className='text-center'>
                <td className='p-3'>1</td>
                <td>Bank of ABC</td>
                <td>1234567890</td>
                <td>Lorem Ipsum</td>
                <td>12/28</td>
                <td className='flex mt-2 justify-center'>
                  <div className='font-medium text-xs text-white bg-secondary px-3 py-1 rounded-md w-fit'>Active</div>
                </td>
                <td>
                  <FaTrash className='text-red-500 m-auto cursor-pointer' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FundraiserAccount>
      
      <Delete
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
      />

      <NewAccount
        openNewAccount={openNewAccount}
        setOpenNewAccount={setOpenNewAccount}
      />
    </>
  )
}

export default WithdrawalAccount