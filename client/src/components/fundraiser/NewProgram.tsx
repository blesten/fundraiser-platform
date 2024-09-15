import { useState, useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { MdPhoto } from 'react-icons/md'
import Button from '../general/Button'
import { FormChanged } from '../../utils/interface'

interface IProps {
  openNewProgram: boolean
  setOpenNewProgram: React.Dispatch<React.SetStateAction<boolean>>
}

const NewProgram = ({ openNewProgram, setOpenNewProgram }: IProps) => {
  const [image, setImage] = useState<File[]>([])

  const newProgramRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const fileRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleChangeImage = (e: FormChanged) => {
    const target = e.target as HTMLInputElement
    const files = [...Object.values(target.files!)]
    setImage([...files])
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openNewProgram && newProgramRef.current && !newProgramRef.current.contains(e.target as Node)) {
        setOpenNewProgram(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openNewProgram, setOpenNewProgram])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-50 bg-[rgba(0,0,0,.8)] transition ${openNewProgram ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={newProgramRef} className={`absolute top-0 right-0 w-[400px] overflow-auto hide-scrollbar bg-white h-screen transition origin-right ${openNewProgram ? 'scale-x-100 pointer-events-auto opacity-100' : 'scale-x-0 pointer-events-none opacity-0'} p-5`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>Create Charity Program</h1>
          <AiOutlineClose onClick={() => setOpenNewProgram(false)} className='cursor-pointer' />
        </div>
        <form className='mt-8'>
          <div className='mb-6'>
            <label htmlFor='image' className='text-sm'>Image</label>
            <div onClick={() => fileRef.current.click()} className='border border-gray-300 bg-gray-100 mt-4 h-[200px] rounded-lg flex flex-col justify-center items-center gap-2'>
              {
                image.length > 0
                ? (
                  <img src={URL.createObjectURL(image[0])} alt='Charity Quest' className='w-full h-full object-cover rounded-lg' />
                )
                : (
                  <>
                    <MdPhoto className='text-7xl text-gray-400' />
                    <p className='text-sm text-gray-500 font-medium'>Upload image</p>
                  </>
                )
              }
              <input ref={fileRef} onChange={handleChangeImage} type='file' multiple={false} className='hidden' accept='image/*' />
            </div>
          </div>
          <div className='mb-6'>
            <label htmlFor='title' className='text-sm'>Title</label>
            <input type='text' id='title' name='title' autoComplete='off' className='outline-none border border-gray-300 rounded-lg text-sm p-3 w-full mt-3' />
          </div>
          <div className='mb-6'>
            <label htmlFor='description' className='text-sm'>Description</label>
            <textarea name='description' id='description' className='p-3 outline-none border border-gray-300 rounded-lg text-sm w-full mt-3 h-32 resize-none' />
          </div>
          <div className='mb-6'>
            <label htmlFor='goals' className='text-sm'>Goals</label>
            <div className='border border-gray-300 w-full rounded-lg flex items-center gap-4 p-3 mt-3'>
              <p>$</p>
              <input type='number' id='goals' name='goals' className='outline-none flex-1 text-sm' min={1} />
            </div>
          </div>
          <div className='mb-7'>
            <label htmlFor='changesProposal' className='text-sm'>Changes Proposal</label>
            <textarea name='changesProposal' id='changesProposal' className='p-3 outline-none border border-gray-300 rounded-lg text-sm w-full mt-3 h-32 resize-none' />
          </div>
          <Button className='bg-secondary hover:bg-primary transition text-white text-sm w-full py-3' content='Request for Approval' onClick={() => {}} />
        </form>
      </div>
    </div>
  )
}

export default NewProgram