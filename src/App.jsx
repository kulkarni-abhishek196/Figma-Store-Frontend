import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { inventory } from './inventory'
import './App.css'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SliderFun from './SliderFun'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <div className='px-12 bg-[#ffc700] h-full w-full'>
          <div className='flex'>
            <div className='flex gap-4 mt-8'>
              <button className='border-2 border-black px-6 py-2 rounded-2xl'>SHOP</button>
              <button className='border-2 border-black px-6 py-2 rounded-2xl'>ABOUT</button>
              <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className='mt-8 mx-auto pr-24'>
              <h1 className='text-2xl font-bold'>THE FIGMA STORE</h1>
            </div>
            
            <div className='flex gap-4 mt-8'>
              <select className="bg-[#ffc700] border-2 border-black rounded-2xl px-2" name="country" id="country">
                <option value="Unites State">United States</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="Brazil">Brazil</option>
              </select>
              <button className='border-2 border-black rounded-2xl px-4'>Cart 0</button>
            </div>
          </div>
          <div className='mt-8 border-b-2 border-black pb-2'>
            <SliderFun />
          </div>
        </div>
        <div className='mt-12 px-12'>
          <img className="rounded-2xl" src="public/desktop_2400x.webp" alt="" />
        </div>

        <div className='grid grid-cols-4 gap-4 mt-12 bg-white px-12'>
          {inventory.map((item, index)=>(
            <div key={index} className='mt-2 '>
              <img className="rounded-2xl cursor-pointer hover:border-2 border-black" src={item.imgSrc} alt="" srcset="" />
              <h1>New!</h1>
              <div className='flex justify-between'>
                <h2 className='font-bold'>{item.title}</h2>
                <h3 className='mr-4'>{item.price}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-around pb-24 px-12 mt-32 bg-[#ffc700] h-full w-full mr-24'>
          <div className='bg-[#c7b9ff] mb-12 mt-24 ml-36 h-48 w-48 rotate-45'>
            <h2 className='text-center mt-4 text-3xl font-bold'>THE <br />FIGMA <br />STORE</h2>
          </div>
          <div>
            <div className='mt-24 flex mr-24'>
              <div className='mr-48'>
                <h1 className='font-bold text-4xl'>OBJECTS <br />THAT INSPIRE.</h1>
                
              </div>
              <div className='mr-24'>
                <ul >
                  <a className='cursor-pointer hover:underline'>Privacy Policy</a>
                  <li className='cursor-pointer mt-2 hover:underline'>Terms of Sales</li>
                  <li className='cursor-pointer mt-2 hover:underline'>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className='flex mt-24 gap-10 '>
              <a href="https://www.figma.com/" className='text-2xl cursor-pointer hover:underline'>FIGMA</a>
              <a href="https://twitter.com/figma?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className='text-2xl cursor-pointer hover:underline'>TWITTER</a>
              <a href="https://www.instagram.com/figma/?hl=en" className='text-2xl cursor-pointer hover:underline'>INSTAGRAM</a>
              <a href="https://www.youtube.com/@Figma/featured" className='text-2xl cursor-pointer hover:underline'>YOUTUBE</a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
