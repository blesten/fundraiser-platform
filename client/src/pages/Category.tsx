import { FaEdit, FaTrash } from 'react-icons/fa'
import { MdCategory } from 'react-icons/md'
import { useEffect, useState } from 'react'
import AdminAccount from './../components/template/AdminAccount'
import NewCategory from '../components/category/NewCategory'
import useStore from './../store/store'
import Delete from '../components/general/Delete'
import Loader from '../components/general/Loader'
import { formatDate } from '../utils/formatter'
import { ICategory } from '../utils/interface'

const Category = () => {
  const [openCreate, setOpenCreate] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Partial<ICategory>>({})
  
  const { readCategory, deleteCategory, userState, categoryState } = useStore()

  const handleClickUpdate = (item: ICategory) => {
    setSelectedCategory(item)
    setOpenCreate(true)
  }

  const handleClickDelete = (item: ICategory) => {
    setOpenDelete(true)
    setSelectedCategory(item)
  }

  const handleDelete = async() => {
    await deleteCategory(selectedCategory._id!, userState.data.accessToken!)
    setSelectedCategory({})
  }

  useEffect(() => {
    readCategory()
  }, [readCategory])

  return (
    <>
      <AdminAccount>
        <div className='flex items-center justify-between'> 
          <h1 className='text-lg font-medium'>Category</h1>
          <button onClick={() => setOpenCreate(true)} className='bg-secondary hover:bg-primary transition text-white rounded-md px-4 py-3 flex items-center justify-center gap-3 text-sm'>
            <MdCategory />
            <p>New Category</p>
          </button>
        </div>
        <div className='mt-10 overflow-x-auto w-full'>
          {
            categoryState.loading
            ? <Loader size='2xl' />
            : categoryState.data.length === 0
              ? (
                <div className='bg-orange-500 text-white text-sm w-full text-center font-medium rounded-md py-3'>
                  <p>Category is empty</p>
                </div>
              )
              : (
                <table className='text-sm w-full'>
                  <thead>
                    <tr className='bg-primary text-white font-medium text-center'>
                      <td className='p-3'>No</td>
                      <td>Category</td>
                      <td>Created Date</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      categoryState.data.map((item, idx) => (
                        <tr key={item._id} className={`text-center ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                          <td className='p-3'>{idx + 1}</td>
                          <td>{item.title}</td>
                          <td>{formatDate(item.createdAt)}</td>
                          <td className='flex items-center justify-center mt-3 gap-5'>
                            <FaEdit onClick={() => handleClickUpdate(item)} className='text-orange-500 cursor-pointer text-lg' />
                            <FaTrash onClick={() => handleClickDelete(item)} className='text-red-500 cursor-pointer text-lg' />
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              )
          }
        </div>
      </AdminAccount>

      <NewCategory
        openNewCategory={openCreate}
        setOpenNewCategory={setOpenCreate}
        selectedCategory={selectedCategory as ICategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Delete
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        onSuccess={handleDelete}
      />
    </>
  )
}

export default Category