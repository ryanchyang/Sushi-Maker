import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getMemId } from '../../../utils';
import { findMem, memLike } from '../../../WebApi';
import { memDoUpload } from '../../../WebApi';
import Carousel from './Carousel';

function MemHead(props) {
  const [memData, setMemData] = useState(null);
  const [memShare, setMemShare] = useState(null);
  const location = useLocation();
  const mem_id = getMemId('mem_id'); //TODO步驟1. 取得會員登入後存在localStorage的member id
  const [imgSrc, setImgSrc] = useState('');
  const { memReviseInfo } = props;
  const isLogin = localStorage.getItem('loginStatus');
  const history = useHistory();

  //備註:因為我是要進來直接render在頁面上 ,所以用useEffct處理
  useEffect(() => {
    // TODO步驟2. 請參考WebApi 這支檔案裡的findMem這支, 只要把function名還有 ${BASE_URL}後的這串網址/member/api/find-member 改成自己的就好了(這串網址是你自訂的router的網址)
    if (isLogin) {
      findMem(mem_id).then(obj => {
        setMemData(obj[0]);
        setImgSrc(
          'http://localhost:3500/img/member' + '/' + obj[0].mem_photo_img_path
        );
        memLike(mem_id).then(d => {
          setMemShare(d);
        });
      }); //做到這裡如果node端API沒寫錯就會拿到你所需的資料了
    }
  }, [memReviseInfo]);

  const handleSubmitUpload = () => {
    const fd = new FormData(document.form1);
    memDoUpload(fd).then(img => {
      setImgSrc('http://localhost:3500/img/member' + '/' + img.filename);
      localStorage.setItem('mem_photo', img.filename);
      history.go(0);
    });
  };

  return (
    <>
      <div className="memHead">
        <form
          name="fake_form"
          onSubmit={e => e.preventDefault()}
          className="memPhotoArea col-md-6 col-sm-24"
        >
          {/* {memData && memData.mem_photo_img_path ? ( */}
            <div className="memPhoto">
              <img className="memImg" src={imgSrc} alt="member-photo" />
            </div>
          {/* ) : (
            <img 
              src={'http://localhost:3500/img/member/member.png'}
              alt="member-photo"
            />
          )} */}

          <div className="memUpload mt-4">
            <div className="memName">
              <p className="ch-title-22">{memData ? memData.mem_name : ''}</p>
            </div>
            <button
              className="btn btn-primary primeal-btn-sm "
              onClick={e => document.querySelector('#avatar').click()}
            >
              點我上傳照片
            </button>
          </div>
        </form>

        <form name="form1" style={{ display: 'none' }}>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={handleSubmitUpload}
          />
          <input
            type="text"
            value={mem_id}
            name="mem_id"
            readOnly
            style={{ display: 'none' }}
          />
        </form>

        <div className="solgan col-md-4 mr-5">
          <p>Good Morning!</p>
        </div>

        <div className="memShare col-md-12">
          <Carousel memShare={memShare} setMemShare={setMemShare} />
        </div>
      </div>
      {/* 手機版LINK */}
      <div
        className="mobileLink"
        style={{
          width: '100%',
        }}
      >
        <div
          className="ch-title-12 mobileLInkOption"
          style={{
            background: location.pathname === '/member' ? '#212121' : '',
          }}
        >
          <Link
            to="/member"
            style={{
              textDecoration: 'none',
              color: location.pathname === '/member' ? '#f7f6f3' : '#212121',
            }}
          >
            <p>會員資訊</p>
          </Link>
        </div>
        <div
          className="ch-title-12 mobileLInkOption"
          style={{
            background: location.pathname === '/member/revise' ? '#212121' : '',
          }}
        >
          <Link
            to="/member/revise"
            style={{
              textDecoration: 'none',
              color:
                location.pathname === '/member/revise' ? '#f7f6f3' : '#212121',
            }}
          >
            <p>修改資料</p>
          </Link>
        </div>
        <div
          className="ch-title-12 mobileLInkOption"
          style={{
            background:
              location.pathname === '/member/analyze' ? '#212121' : '',
          }}
        >
          <Link
            to="/member/analyze"
            style={{
              textDecoration: 'none',
              color:
                location.pathname === '/member/analyze' ? '#f7f6f3' : '#212121',
            }}
          >
            <p>營養分析</p>
          </Link>
        </div>
        <div
          className="ch-title-12 mobileLInkOption"
          style={{
            background: location.pathname === '/member/active' ? '#212121' : '',
          }}
        >
          <Link
            to="/member/active"
            style={{
              textDecoration: 'none',
              color:
                location.pathname === '/member/active' ? '#f7f6f3' : '#212121',
            }}
          >
            <p>活動行程</p>
          </Link>
        </div>
        <div
          className="ch-title-12 mobileLInkOption"
          style={{
            background:
              location.pathname === '/member/historyorder' ? '#212121' : '',
          }}
        >
          <Link
            to="/member/historyorder"
            style={{
              textDecoration: 'none',
              color:
                location.pathname === '/member/historyorder'
                  ? '#f7f6f3'
                  : '#212121',
            }}
          >
            <p>我的訂單</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MemHead;
