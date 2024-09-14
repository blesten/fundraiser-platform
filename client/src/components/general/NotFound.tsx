import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-7'>
      <Link to='/' className='flex items-center gap-4 outline-none'>
        <img src={`${process.env.PUBLIC_URL}/images/logo/colored-logo.svg`} alt='Charity Quest' className='w-12 pointer-events-none' />
        <h1 className='quicksand text-secondary font-bold text-2xl'>Charity Quest</h1>
      </Link>
      <h1 className='mt-7 text-xl font-medium'>404 | Not Found</h1>
      <Link to='/' className='bg-secondary hover:bg-primary transition text-white font-medium px-6 py-3 text-sm rounded-full'>Back to Home</Link>
    </div>
  )
}

export default NotFound