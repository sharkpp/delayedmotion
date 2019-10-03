"use struct";

import React from 'react';

import { Card, Button } from 'react-bootstrap';

import './SimplePopup.css';

export default function ({ open, caption, title, onClose, children }) {

  return (
    <div className={`simple-popup ${open?'open':'close'}`} >
      <div className='background' />
      <div>
        <Card>
          {!!caption&&<Card.Header>{caption}</Card.Header>}
          <Card.Body>
            {!!title&&<Card.Title>{title}</Card.Title>}
            <div className="card-text" style={{
                  'height': `calc(100% - 1rem${!!title?' - 2rem':''} - 2.5rem)`
            }}>
              {children}
            </div>{/* Card.Text だと p 要素になって警告が出る場合があるので */}
            <Button variant="primary" onClick={() => {onClose&&onClose()}}>閉じる</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
