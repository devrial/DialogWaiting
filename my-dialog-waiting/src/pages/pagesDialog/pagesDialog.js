import React from 'react';

import { Button } from 'primereact/button';

import DialogWaiting from '../../components/DialogWaiting/DialogWaiting';

const pagesDialog = () => {
  return (
    <div>
      <Button label='Clear' />
      <DialogWaiting visible={true} closable={false} showHeader={false} contentStyle={{ padding: '1.5rem' }} />
    </div>
  )
}

export default pagesDialog;
