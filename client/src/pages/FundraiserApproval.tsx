import { BsInfoCircleFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import AdminAccount from './../components/template/AdminAccount'
import Accept from '../components/general/Accept'
import Reject from '../components/general/Reject'
import FundraiserApprovalInfo from '../components/info/FundraiserApprovalInfo'
import useStore from './../store/store'
import Loader from '../components/general/Loader'
import { formatDate } from '../utils/formatter'
import { IFundraiserApproval } from '../utils/interface'
import Pagination from '../components/general/Pagination'

const FundraiserApproval = () => {
  const [openFundraiserInfo, setOpenFundraiserInfo] = useState(false)
  const [openAccept, setOpenAccept] = useState(false)
  const [openReject, setOpenReject] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedFundraiser, setSelectedFundraiser] = useState<Partial<IFundraiserApproval>>({})

  const { userState, fundraiserApprovalState, updateFundraiser, readFundraiser } = useStore()

  const handleClickInfo = (item: IFundraiserApproval) => {
    setSelectedFundraiser(item)
    setOpenFundraiserInfo(true)
  }

  const handleClickAccept = (item: IFundraiserApproval) => {
    setSelectedFundraiser(item)
    setOpenAccept(true)
  }

  const handleAccept = async() => {
    await updateFundraiser(selectedFundraiser._id!, { status: 'active' }, userState.data.accessToken!)
    setSelectedFundraiser({})
  }

  const handleClickReject = (item: IFundraiserApproval) => {
    setSelectedFundraiser(item)
    setOpenReject(true)
  }

  const handleReject = async() => {
    await updateFundraiser(selectedFundraiser._id!, { status: 'rejected' }, userState.data.accessToken!)
    setSelectedFundraiser({})
  }

  useEffect(() => {
    if (userState.data.accessToken)
      readFundraiser(userState.data.accessToken!, page)
  }, [readFundraiser, userState.data.accessToken, page])

  return (
    <>
      <AdminAccount>
        <div className='mt-4 overflow-x-auto w-full'>
          {
            fundraiserApprovalState.loading
            ? <Loader size='2xl' />
            : fundraiserApprovalState.data.length === 0
              ? (
                <div className='w-full bg-orange-500 rounded-md py-3 text-center text-white font-medium text-sm'>
                  <p>There&apos;s no fundraiser data that need to be approved</p>
                </div>
              )
              : (
                <>
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
                      {
                        fundraiserApprovalState.data.map((item, idx) => (
                          <tr key={item._id} className={`text-center ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                            <td className='p-3'>{idx + 1}</td>
                            <td>
                              {
                                item.user.avatar
                                ? (
                                  <div className='bg-gray-200 border border-gray-300 w-7 h-7 rounded-full m-auto'>
                                    <img src={item.user.avatar} alt='Charity Quest' className='w-full h-full rounded-full border border-gray-300 object-cover' />
                                  </div>
                                )
                                : (
                                  <div className='bg-secondary text-white flex items-center justify-center m-auto w-7 h-7 rounded-full'>
                                    <p>{`${item.user.name.split(' ')[0][0]}${item.user.name.split(' ')[item.user.name.split(' ').length - 1][0]}`}</p>
                                  </div>
                                )
                              }
                            </td>
                            <td>{item.user.name}</td>
                            <td>{item.user.email}</td>
                            <td>{formatDate(item.user.createdAt)}</td>
                            <td>{formatDate(item.createdAt)}</td>
                            <td className='flex items-center justify-center gap-4 mt-3'>
                              <BsInfoCircleFill onClick={() => handleClickInfo(item)} className='cursor-pointer text-blue-500 text-lg' />
                              <FaCheck onClick={() => handleClickAccept(item)} className='cursor-pointer text-secondary text-lg' />
                              <AiOutlineClose onClick={() => handleClickReject(item)} className='cursor-pointer text-red-500 text-lg' />
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>

                  {
                    fundraiserApprovalState.totalPage > 1 &&
                    <Pagination
                      currentPage={page}
                      setPage={setPage}
                      totalPage={fundraiserApprovalState.totalPage}
                    />
                  }
                </>
              )
          }
        </div>
      </AdminAccount>

      <Accept
        openAccept={openAccept}
        setOpenAccept={setOpenAccept}
        onSuccess={handleAccept}
      />

      <Reject 
        openReject={openReject}
        setOpenReject={setOpenReject}
        onSuccess={handleReject}
      />

      <FundraiserApprovalInfo
        openFundraiserInfo={openFundraiserInfo}
        setOpenFundraiserInfo={setOpenFundraiserInfo}
        selectedFundraiser={selectedFundraiser as IFundraiserApproval}
        setSelectedFundraiser={setSelectedFundraiser}
      />
    </>
  )
}

export default FundraiserApproval