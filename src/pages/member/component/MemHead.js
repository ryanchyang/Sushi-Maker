import { useEffect, useState, useRef } from 'react';
import { getMemId } from '../../../utils';
import { findMem } from '../../../WebApi';
import { memDoUpload } from '../../../WebApi';
import Carousel from './Carousel';

function MemHead() {
  const [memData, setMemData] = useState(null);

  const mem_id = getMemId('mem_id'); //TODO步驟1. 取得會員登入後存在localStorage的member id
  const [imgSrc, setImgSrc] = useState('');

  //備註:因為我是要進來直接render在頁面上 ,所以用useEffct處理
  useEffect(() => {
    // TODO步驟2. 請參考WebApi 這支檔案裡的findMem這支, 只要把function名還有 ${BASE_URL}後的這串網址/member/api/find-member 改成自己的就好了(這串網址是你自訂的router的網址)
    findMem(mem_id).then(obj => {
      setMemData(obj[0]);
      setImgSrc(
        'http://localhost:3500/img/member' + '/' + obj[0].mem_photo_img_path
      );
      console.log(obj[0].mem_photo_img_path);
    }); //做到這裡如果node端API沒寫錯就會拿到你所需的資料了
  }, []);

  const handleSubmitUpload = () => {
    const fd = new FormData(document.form1);
    memDoUpload(fd).then(img => {
      setImgSrc('http://localhost:3500/img/member' + '/' + img.filename);
      localStorage.setItem('mem_photo', img.filename);
    });
  };

  return (
    <div className="memHead ">
      <form
        name="fake_form"
        onSubmit={e => e.preventDefault()}
        className="memPhotoArea col-md-6"
      >
        <div className="memPhoto">
          <img className="memImg" src={imgSrc} alt="member-photo" />
        </div>

        <div class="memUpload mt-4">
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
          style={{ display: 'none' }}
        />
      </form>

      <div className="solgan col-md-4 mr-5">
        <p>Good Morning!</p>
      </div>

      <div className="memShare col-md-12 ml-5">
        <Carousel />
      </div>
    </div>
  );
}

export default MemHead;
