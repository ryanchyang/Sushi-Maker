//最後預覽頁的components
import './../SetOrderAll.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

function SetMenuFinal(props) {

  return (
    <>
      <div className="setmenulist">
        <div className="align-items-center">
          <div className="set-menu">
            <div className="en-cont-36 set-day">$</div>
            <div className="set-sushi-all">
              <div className="ch-cont-18 set-sushi-ch">鮭魚壽司便當</div>
              <div className="en-cont-18 set-sushi-en">Salmon Sushi Bento</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetMenuFinal;
