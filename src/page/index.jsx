import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='status-bar'>
        <div className='left-side'>
          <div className='time'>
            <div className='colon' />
          </div>
        </div>
        <div className='right-side'>
          <div className='wifi' />
          <div className='battery' />
          <div className='mobile-signal' />
        </div>
      </div>
      <div className='sks-layout' />
      <div className='content'>
        <div className='copy' />
        <span className='login'>LOGIN</span>
        <div className='divider' />
        <div className='input-button'>
          <div className='field'>
            <span className='label'>email@kyonggi.ac.kr</span>
          </div>
          <input className='input' />
        </div>
        <div className='input-and-button'>
          <div className='field-1'>
            <span className='label-2'>password</span>
          </div>
          <input className='input-3' />
        </div>
        <div className='divider-4'>
          <div className='divider-5' />
        </div>
        <button className='button'>
          <div className='label-6'>
            <div className='google' />
            <span className='google-7'>Google</span>
          </div>
        </button>
        <button className='button-8'>
          <div className='label-9' />
          <div className='vector' />
          <span className='naver'>Naver</span>
          <div className='naver-logo'>
            <div className='group'>
              <div className='vector-a' />
            </div>
          </div>
        </button>
        <button className='button-b'>
          <div className='kakao-talk-photo' />
          <div className='flex-column-fe'>
            <div className='label-c'>
              <div className='google-d' />
            </div>
            <span className='kakao'>Kakao</span>
          </div>
        </button>
      </div>
      <div className='home-indicator' />
    </div>
  );
}
