import { FaFilePdf, FaHandHoldingHeart } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import { FormChanged, FormSubmitted } from '../../utils/interface'
import { AiOutlineClose } from 'react-icons/ai'
import { postDataAPI } from '../../utils/fetchData'
import useStore from './../../store/store'
import Button from '../general/Button'
import Loader from '../general/Loader'

interface IProps {
  openSwitchToFundraiser: boolean
  setOpenSwitchToFundraiser: React.Dispatch<React.SetStateAction<boolean>>
}

const SwitchToFundraiser = ({ openSwitchToFundraiser, setOpenSwitchToFundraiser }: IProps) => {
  const [proposal, setProposal] = useState('')
  const [supportingDocument, setSupportingDocument] = useState<File[]>([])
  const [loading, setLoading] = useState(false)

  const fileRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const switchToFundraiserRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const { userState, initiate } = useStore()

  const handleChangeFile = (e: FormChanged) => {
    const target = e.target as HTMLInputElement
    const files = Array.from(target.files || [])
    setSupportingDocument(files)
  }

  const handleSubmit = async(e: FormSubmitted) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()

      formData.append('requestProposal', proposal)
      formData.append('supportingDocument', supportingDocument[0])

      const res = await postDataAPI('fundraiser', formData, userState.data.accessToken)
      initiate(res.data.msg, 'success')
    } catch (err: any) {
      initiate(err.response.data.msg, 'error')
    } finally {
      setOpenSwitchToFundraiser(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openSwitchToFundraiser && switchToFundraiserRef.current && !switchToFundraiserRef.current.contains(e.target as Node)) {
        setOpenSwitchToFundraiser(false)
      }
    }
    
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openSwitchToFundraiser, setOpenSwitchToFundraiser])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] flex items-center justify-center ${openSwitchToFundraiser ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition z-50 md:p-0 p-10`}>
      <div ref={switchToFundraiserRef} className={`lg:w-1/3 md:w-1/2 w-full bg-white rounded-xl ${openSwitchToFundraiser ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-20 pointer-events-none'} delay-150 transition`}>
        <div className='flex items-center justify-between px-6 py-4 border-b border-gray-300'>
          <div className='flex items-center gap-4'>
            <FaHandHoldingHeart className='text-secondary text-xl' />
            <h1 className='font-medium'>Fundraiser Account Application</h1>
          </div>
          <AiOutlineClose onClick={() => setOpenSwitchToFundraiser(false)} className='text-gray-500 cursor-pointer' />
        </div>
        <form onSubmit={handleSubmit} className='px-6 py-5'>
          <div className='mb-6'>
            <label htmlFor='proposal' className='text-sm font-medium'>Request Proposal</label>
            <textarea name='proposal' id='proposal' value={proposal} onChange={e => setProposal(e.target.value)} className='p-3 outline-none border border-gray-300 text-sm rounded-lg mt-3 w-full resize-none h-52' placeholder='Min. 200 words' />
          </div>
          <div className='mb-8'>
            <label htmlFor='document' className='font-medium text-sm'>Supporting Document</label>
            <div onClick={() => fileRef.current.click()} className='border border-gray-300 bg-gray-100 w-full h-32 rounded-lg mt-3 flex items-center justify-center flex-col gap-4'>
              {
                supportingDocument.length < 1
                ? (
                  <>
                    <FaFilePdf className='text-6xl text-gray-400' />
                    <p className='text-xs text-gray-400'>Upload supporting document in PDF format</p>
                  </>
                )
                : (
                  <>
                    <FaFilePdf className='text-6xl text-red-500' />
                    <p className='text-xs text-red-500 font-medium'>{supportingDocument[0].name}</p>
                  </>
                )
              }
            </div>
            <input ref={fileRef} onChange={handleChangeFile} type='file' className='hidden' multiple={false} accept='.pdf' />
          </div>
          <Button
            disabled={loading || proposal.split(' ').length < 201 || supportingDocument.length < 1}
            className={`${loading || proposal.split(' ').length < 201 || supportingDocument.length < 1 ? 'bg-gray-200 hover:bg-gray-200 cursor-not-allowed' : 'bg-secondary hover:bg-primary cursor-pointer'} transition text-white text-sm font-medium w-full py-3`}
            content={loading ? <Loader /> : 'Send Request'}
            onClick={() => handleSubmit}
          />
        </form>
      </div>
    </div>
  )
}

export default SwitchToFundraiser