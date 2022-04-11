import React from 'react';

import { Dialog } from 'primereact/dialog';

import './styles.css'

const DialogWaiting = ({ showHeader, closable, visible, contentStyle }) => {
  return (
    <Dialog id='dialog-waiting' showHeader={showHeader} closable={closable} visible={visible} contentStyle={contentStyle} baseZIndex={999999999} 
    breakpoints={{ '960px': '35vw', '640px': '50vw' }} style={{ width: '0%', borderRadius: '40px' }}  >
      <div className='loader'>
          <div className='outer'></div>
          <div className='middle'></div>
          <div className='inner'></div>
      </div>
      <p>tes</p>
    </Dialog>
  )
}

export default DialogWaiting;
