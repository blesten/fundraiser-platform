import { useState, useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FormSubmitted, ICategory } from '../../utils/interface'
import useStore from './../../store/store'
import Button from '../general/Button'
import Loader from '../general/Loader'

interface IProps {
  openNewCategory: boolean
  setOpenNewCategory: React.Dispatch<React.SetStateAction<boolean>>
  selectedCategory: ICategory
  setSelectedCategory: React.Dispatch<React.SetStateAction<Partial<ICategory>>>
}

const NewCategory = ({ openNewCategory, setOpenNewCategory, selectedCategory, setSelectedCategory }: IProps) => {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const newCategoryRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const { userState, createCategory, updateCategory } = useStore()

  const handleSubmit = async(e: FormSubmitted) => {
    e.preventDefault()
    setLoading(true)
    if (Object.keys(selectedCategory).length > 0) {
      await updateCategory(selectedCategory._id!, title, userState.data.accessToken!)
    } else {
      await createCategory(title, userState.data.accessToken!)
    }
    setOpenNewCategory(false)
    setLoading(false)
  }

  const handleClose = () => {
    setOpenNewCategory(false)
    setSelectedCategory({})
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openNewCategory && newCategoryRef.current && !newCategoryRef.current.contains(e.target as Node)) {
        setOpenNewCategory(false)
        setSelectedCategory({})
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openNewCategory, setOpenNewCategory, setSelectedCategory])

  useEffect(() => {
    if (Object.keys(selectedCategory).length > 0) {
      setTitle(selectedCategory.title)
    }
  }, [selectedCategory])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-40 transition bg-[rgba(0,0,0,.8)] ${openNewCategory ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={newCategoryRef} className={`absolute top-0 right-0 h-full bg-white sm:w-[400px] w-[320px] transition origin-right ${openNewCategory ? 'scale-x-100 opacity-100 pointer-events-auto' : 'scale-x-0 opacity-0 pointer-events-none'} p-7`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>New Category</h1>
          <AiOutlineClose onClick={handleClose} className='cursor-pointer' />
        </div>
        <form onSubmit={handleSubmit} className='mt-8'>
          <div className='mb-7'>
            <label htmlFor='category' className='text-sm'>Category</label>
            <input type='text' id='category' value={title} onChange={e => setTitle(e.target.value)} className='outline-none border border-gray-400 rounded-lg w-full p-3 text-sm mt-3' />
          </div>
          <Button
            disabled={loading || !title}
            content={loading ? <Loader /> : Object.keys(selectedCategory).length > 0 ? 'Save Changes' : 'Save'}
            className={`w-full ${loading || !title ? 'bg-gray-200 hover:bg-gray-200 cursor-not-allowed' : 'bg-secondary hover:bg-primary cursor-pointer'} transition py-3 text-white text-sm font-medium`}
            onClick={() => handleSubmit}
          />
        </form>
      </div>
    </div>
  )
}

export default NewCategory