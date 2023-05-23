import React,{useState} from 'react'
import { Button } from '@mui/material';
import Draft from './Draft';
import Modal from 'react-modal'
import CancelIcon from '@mui/icons-material/Cancel';
Modal.setAppElement('#root'); // set the app root element to handle screen readers
export const Navbar = (props) => {
    const [open,isOpen] = useState(false)
    const [menu,setMenu] = useState('hidden')
    const toggleMenu = () =>{
     menu === 'hidden'
     ?
     setMenu('flex')
     :setMenu('hidden')
    }
    const openModal = ()=>{
        isOpen(!open)
    }
  return (
        <div>
        <Modal isOpen={open}>
        <div >
        <button onClick={openModal} className='float-right' >{<CancelIcon/>}</button>
        </div>
           <Draft/>
        </Modal>
         <nav className="flex items-center justify-between flex-wrap bg-teal-800 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight">Blog-app</span>
          </div>
          <div class="block lg:hidden">
            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={"w-full   flex-grow lg:flex lg:items-center lg:w-auto mobile:"+menu}>
            <div className="text-sm lg:flex-grow">
                 
              <a href="/" className="block mt-4 text-lg hover:underline lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Read Blogs
              </a>
            </div>
            
            <div>
            <Button class="mr-5 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-gray-200 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" onClick={props.username==='*'? ()=> window.location.replace('/login'): openModal}>Create Post +</Button>
              {
               
                (props.username !== '*') ?
             
               (
                 <div className='inline'>
                 <h1 className='text-white inline px-5'>{props.username}</h1>
                 <Button className='' variant='contained' onClick={
                   async ()=>{
                    await fetch('/logout');
                    window.location.reload(false) 
                 }
                   
                 }>LOGOUT</Button>
                 </div>
                )
                :
                <a href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
              }
              
            </div>
          </div>
        </nav>
    </div>
  )
}
