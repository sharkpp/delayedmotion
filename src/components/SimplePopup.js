"use struct";

import React, { useState, useCallback } from 'react';

import { Card, Button } from 'react-bootstrap';

import './SimplePopup.css';

export default function ({ open, caption, title, onClose, children }) {
console.log('open',open);
  return (
    <div className={`simple-popup ${open?'open':'close'}`} >
      <div className='background' />
      <div>
        <Card>
          {!!caption&&<Card.Header>{caption}</Card.Header>}
          <Card.Body>
            {!!title&&<Card.Title>{title}</Card.Title>}
            <Card.Text style={{
                  'height': `calc(100% - 1rem${!!title?' - 2rem':''} - 2.5rem)`
            }}>
              {children}
            </Card.Text>
            <Button variant="primary" onClick={() => {onClose&&onClose()}}>閉じる</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
