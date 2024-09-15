import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../general/Button'

interface IProps {
  openNewCategory: boolean
  setOpenNewCategory: React.Dispatch<React.SetStateAction<boolean>>
}

const NewCategory = ({ openNewCategory, setOpenNewCategory }: IProps) => {
  const newCategoryRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openNewCategory && newCategoryRef.current && !newCategoryRef.current.contains(e.target as Node)) {
        setOpenNewCategory(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openNewCategory, setOpenNewCategory])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-40 transition bg-[rgba(0,0,0,.8)] ${openNewCategory ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={newCategoryRef} className={`absolute top-0 right-0 h-full bg-white sm:w-[400px] w-[320px] transition origin-right ${openNewCategory ? 'scale-x-100 opacity-100 pointer-events-auto' : 'scale-x-0 opacity-0 pointer-events-none'} p-7`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>New Category</h1>
          <AiOutlineClose onClick={() => setOpenNewCategory(false)} className='cursor-pointer' />
        </div>
        <form className='mt-8'>
          <div className='mb-7'>
            <label htmlFor='category' className='text-sm'>Category</label>
            <input type='text' className='outline-none border border-gray-400 rounded-lg w-full p-3 text-sm mt-3' />
          </div>
          <Button content='Save' onClick={() => {}} className='w-full bg-secondary hover:bg-primary transition py-3 text-white text-sm font-medium' />
        </form>
      </div>
    </div>
  )
}

export default NewCategory