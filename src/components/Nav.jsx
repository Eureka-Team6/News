import React, { useState } from 'react';
import images from '../utils/importAll';
import { Dialog, DialogPanel } from '@headlessui/react'
import TopUs from './TopUs';
import TopKr from './TopKr';

const navigation = [
  { name: '사회', text: 'general' },
  { name: '경제', text: 'business'},
  { name: '생활/문화', text: 'entertainment'},
  { name: '기술', text: 'technology'}
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [item, setItem] = useState('해외');
  const [category, setCategory] = useState('general');

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <div className="bg-white">
      <header className="max-w-full mx-auto px-4 mt-2">
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-24 w-24 mr-4" src={images['logo.png']} alt='logo img'/>
            </a>
            {/*토글 동그라미에 가려지는 글자와 동적 효과*/}
            <div 
              className='w-[90px] h-[36px] bg-indigo-900 px-2 rounded-full relative flex items-center overflow-hidden ease-in-out duration-200 cursor-pointer'
              onClick={() => setItem(item === '국내' ? '해외' : '국내')}
            >
              <div 
                className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full transition-transform duration-500 ease-in-out z-10 ${item === '해외' ? 'translate-x-[55px]' : ''}`}
              />
              <div className='flex justify-between w-full md:text-sm fontSB relative z-0'>
                <p className={`text-white transition-opacity duration-700 ${item === '국내' ? 'opacity-0' : 'opacity-100'}`}>국내</p>
                <p className={`text-white transition-opacity duration-700 ${item === '해외' ? 'opacity-0' : 'opacity-100'}`}>해외</p>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="flex-1 justify-center hidden lg:flex gap-x-20">
            {navigation.map((item) => (
              <button key={item.name} onClick={() => handleClick(item.text)} className="text-base fontBold leading-6 text-gray-900 hover:text-indigo-800 transition-all duration-300">
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <a href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <img
                alt="logo img"
                src={images['logo.png']}
                className="h-24 w-24"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleClick(item.text)}
                      className="-mx-3 block rounded-lg px-3 py-2 w-full text-left text-base fontBold leading-7 text-gray-900 hover:bg-indigo-900 hover:text-white"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base fontBold leading-7 text-gray-900 hover:bg-indigo-900 hover:text-white">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* item : 동그라미에 가려지는 글자 */}
      <div className='mb-5'>
        {item === "국내" ? <TopUs category={category} /> : <TopKr/>}
      </div>
    </div>
);
}
