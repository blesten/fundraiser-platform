import { useEffect, useRef } from 'react'
import { AuthType } from './../general/Navbar'
import ForgetPassword from './ForgetPassword'
import SignIn from './SignIn'
import SignUp from './SignUp'

interface IProps {
  authScreen: string
  setAuthScreen: React.Dispatch<React.SetStateAction<string>>
}

const Authentication = ({ authScreen, setAuthScreen }: IProps) => {
  const overlayRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        setAuthScreen('')
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [setAuthScreen])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] z-30  flex items-center justify-center ${authScreen !== '' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition`}>
      <div ref={overlayRef} className={`bg-white w-1/3 rounded-xl ${authScreen !== '' ? 'opacity-100 translate-y-0 pointer-events-auto p-8' : 'opacity-0 -translate-y-20 pointer-events-none'} delay-150 transition opacity-0 flex flex-col items-center justify-between gap-9`}>
        {
          authScreen === AuthType.SignIn.toString()
          ? <SignIn setAuthScreen={setAuthScreen} />
          : authScreen === AuthType.SignUp.toString()
            ? <SignUp setAuthScreen={setAuthScreen} />
            : authScreen === AuthType.ForgetPassword.toString()
              ?  <ForgetPassword setAuthScreen={setAuthScreen} />
              : ''
        }
      </div>
    </div>
  )
}

export default Authentication