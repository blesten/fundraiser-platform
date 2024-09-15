import { BsInfoCircleFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import AdminAccount from './../components/template/AdminAccount'
import Accept from '../components/general/Accept'
import Reject from '../components/general/Reject'
import FundraiserApprovalInfo from '../components/info/FundraiserApprovalInfo'

const FundraiserApproval = () => {
  const [openFundraiserInfo, setOpenFundraiserInfo] = useState(false)
  const [openAccept, setOpenAccept] = useState(false)
  const [openReject, setOpenReject] = useState(false)

  return (
    <>
      <AdminAccount>
        <div className='mt-4 overflow-x-auto w-full'>
          <table className='text-sm w-full'>
            <thead>
              <tr className='bg-primary text-white font-medium text-center'>
                <td className='p-3'>No</td>
                <td>Avatar</td>
                <td>Name</td>
                <td>Email</td>
                <td>Registered Date</td>
                <td>Request Date</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center bg-gray-100'>
                <td className='p-3'>1</td>
                <td>
                  <div className='bg-gray-200 border border-gray-300 w-7 h-7 rounded-full m-auto'></div>
                </td>
                <td>John Doe</td>
                <td>johndoe@gmail.com</td>
                <td>12 February 2024</td>
                <td>12 February 2024</td>
                <td className='flex items-center justify-center gap-4 mt-3'>
                  <BsInfoCircleFill onClick={() => setOpenFundraiserInfo(true)} className='cursor-pointer text-blue-500 text-lg' />
                  <FaCheck onClick={() => setOpenAccept(true)} className='cursor-pointer text-secondary text-lg' />
                  <AiOutlineClose onClick={() => setOpenReject(true)} className='cursor-pointer text-red-500 text-lg' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </AdminAccount>

      <Accept
        openAccept={openAccept}
        setOpenAccept={setOpenAccept}
      />

      <Reject
        openReject={openReject}
        setOpenReject={setOpenReject}
      />

      <FundraiserApprovalInfo
        openFundraiserInfo={openFundraiserInfo}
        setOpenFundraiserInfo={setOpenFundraiserInfo}
      />
    </>
  )
}

export default FundraiserApproval