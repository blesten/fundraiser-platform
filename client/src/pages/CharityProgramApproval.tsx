import { BsInfoCircleFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import AdminAccount from './../components/template/AdminAccount'
import Accept from '../components/general/Accept'
import Reject from '../components/general/Reject'
import CharityProgramInfo from '../components/info/CharityProgramInfo'

const CharityProgramApproval = () => {
  const [openAccept, setOpenAccept] = useState(false)
  const [openReject, setOpenReject] = useState(false)
  const [openCharityProgramInfo, setOpenCharityProgramInfo] = useState(false)

  return (
    <>
      <AdminAccount>
        <div className='mt-4 overflow-x-auto w-full'>
          <table className='text-sm w-full'>
            <thead>
              <tr className='bg-primary text-white font-medium text-center'>
                <td className='p-3'>No</td>
                <td>Category</td>
                <td>Targeted Amount</td>
                <td>Request Date</td>
                <td>Fundraiser</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center bg-gray-100'>
                <td className='p-3'>1</td>
                <td>Environment</td>
                <td>40,000</td>
                <td>12 February 2024</td>
                <td>John Doe</td>
                <td className='flex items-center justify-center gap-4 mt-3'>
                  <BsInfoCircleFill onClick={() => setOpenCharityProgramInfo(true)} className='cursor-pointer text-blue-500 text-lg' />
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

      <CharityProgramInfo
        openCharityProgramInfo={openCharityProgramInfo}
        setOpenCharityProgramInfo={setOpenCharityProgramInfo}
      />
    </>
  )
}

export default CharityProgramApproval