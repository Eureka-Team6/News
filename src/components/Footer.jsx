import React from 'react';
import images from '../utils/importAll';

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-3">
        <footer className="flex items-center justify-between">
          <div className="flex flex-col">
            <img className="h-28 w-28 mr-4" src={images['logo.png']} alt='logo img'/>
            <p className='fontRegular'>서울특별시 강남구 선릉로 428</p>
            <p className='fontRegular'>대표전화 : 1544-9001</p>
            <p className='fontRegular'>www.yesterdaything.com</p>
            <p className='fontRegular'>Copyright ⓒ 2024</p>
          </div>
          <div className="flex items-center flex-col">
            <p className='fontRegular mb-2'>문의하기</p>
            <div className="flex justify-between w-full">
              <img className="h-10 w-10 mr-4" src={images['email.png']} alt='logo img'/>
              <img className="h-10 w-10 mr-4" src={images['instagram.png']} alt='logo img'/>
              <img className="h-10 w-10" src={images['twitter.png']} alt='logo img'/>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
