import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFilePdf } from 'react-icons/fa'
import { IFundraiserApproval } from '../../utils/interface'
import { formatDate } from '../../utils/formatter'
import { Link } from 'react-router-dom'

interface IProps {
  openFundraiserInfo: boolean
  setOpenFundraiserInfo: React.Dispatch<React.SetStateAction<boolean>>
  selectedFundraiser: IFundraiserApproval
  setSelectedFundraiser: React.Dispatch<React.SetStateAction<Partial<IFundraiserApproval>>>
}

const FundraiserApprovalInfo = ({ openFundraiserInfo, setOpenFundraiserInfo, selectedFundraiser, setSelectedFundraiser }: IProps) => {
  const fundraiserInfoRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleClose = () => {
    setSelectedFundraiser({})
    setOpenFundraiserInfo(false)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openFundraiserInfo && fundraiserInfoRef.current && !fundraiserInfoRef.current.contains(e.target as Node)) {
        setOpenFundraiserInfo(false)
        setSelectedFundraiser({})
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openFundraiserInfo, setOpenFundraiserInfo, setSelectedFundraiser])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 transition z-40 bg-[rgba(0,0,0,.8)] ${openFundraiserInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={fundraiserInfoRef} className={`absolute top-0 right-0 h-full sm:w-[450px] w-[320px] transition origin-right bg-white p-6 ${openFundraiserInfo ? 'opacity-100 scale-x-100 pointer-events-auto' : 'opacity-0 scale-x-0 pointer-events-none'} overflow-auto hide-scrollbar`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>Fundraiser Info</h1>
          <AiOutlineClose onClick={handleClose} className='cursor-pointer' />
        </div>
        {
          Object.keys(selectedFundraiser).length > 0 &&
          <div className='mt-8'>
            <div className='flex sm:flex-row flex-col sm:items-center justify-between'>
              <div className='flex items-center gap-4'>
                {
                  selectedFundraiser.user.avatar
                  ? (
                    <div className='bg-secondary rounded-full w-10 h-10 text-white flex items-center justify-center font-medium'>
                      <img src={selectedFundraiser.user.avatar} alt='Charity Quest' className='w-full h-full rounded-full border border-gray-300 object-cover pointer-events-none' />
                    </div>
                  )
                  : (
                    <div className='bg-secondary rounded-full w-10 h-10 text-white flex items-center justify-center font-medium'>
                      <p>{`${selectedFundraiser.user.name.split(' ')[0][0]}${selectedFundraiser.user.name.split(' ')[selectedFundraiser.user.name.split(' ').length - 1][0]}`}</p>
                    </div>
                  )
                }
                <div>
                  <h1 className='font-medium'>{selectedFundraiser.user.name}</h1>
                  <p className='text-gray-400 text-xs font-medium mt-1'>{selectedFundraiser.user.email}</p>
                </div>
              </div>
              <p className='text-gray-500 text-xs sm:mt-0 mt-5'>{formatDate(selectedFundraiser.user.createdAt)}</p>
            </div>
            <div className='mt-10'>
              <p className='text-sm font-medium'>Request Fundraiser Account Date</p>
              <p className='mt-3 text-sm text-gray-500'>{formatDate(selectedFundraiser.createdAt)}</p>
            </div>
            <div className='mt-8'>
              <p className='text-sm font-medium'>Request Proposal</p>
              <p className='mt-3 text-sm text-gray-500 leading-relaxed'>{selectedFundraiser.requestProposal}</p>
            </div>
            <div className='mt-8'>
              <p className='text-sm font-medium'>Supporting Document</p>
              <Link to={selectedFundraiser.supportingDocument} target='_blank' className='rounded-full w-full bg-red-500 text-white hover:bg-red-600 transition py-3 flex items-center justify-center gap-3 mt-3'>
                <FaFilePdf className='text-lg' />
                <p className='font-medium'>Download</p>
              </Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default FundraiserApprovalInfo