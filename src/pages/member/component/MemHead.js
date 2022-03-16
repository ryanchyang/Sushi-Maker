import { useEffect, useState } from 'react';
import { getMemId } from '../../../utils';
import { findMem } from '../../../WebApi';

function MemHead() {
  const [memData, setMemData] = useState(null);
  const mem_id = getMemId('mem_id'); //TODO步驟1. 取得會員登入後存在localStorage的member id
  
  //備註:因為我是要進來直接render在頁面上 ,所以用useEffct處理
  useEffect(() => {
    // TODO步驟2. 請參考WebApi 這支檔案裡的findMem這支, 只要把function名還有 ${BASE_URL}後的這串網址/member/api/find-member 改成自己的就好了(這串網址是你自訂的router的網址) 
    findMem(mem_id).then(obj => {
      setMemData(obj[0]);
    });//做到這裡如果node端API沒寫錯就會拿到你所需的資料了
  }, [memData]);

  return (
    <div className="memHead ">
      <div className="memPhotoArea col-md-6">
        <div className="memPhoto">
          <img
            className="memImg"
            src={memData ? `/img/member/${memData.mem_photo_img_path}` : ''}
            alt="member-photo"
          />
        </div>
        <div className="memName">
          <p className="ch-title-22">{memData ? memData.mem_name : ''}</p>
        </div>
        <button className="btn btn-primary primeal-btn-sm ">照片上傳</button>
      </div>
      <div className="solgan col-md-4 mr-5">
        <p>Good Morning!</p>
      </div>

      <div className="memShare col-md-12 ml-5">
        <div className="divCarou">
          <div className="carouImg mx-3">
            <img className="Cimg" src="/img/member/shareImg.png" alt="" />
          </div>
          <div className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </div>
          <div className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </div>
          <div className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </div>
        </div>
        <button className="btn btn-primary primeal-btn-sm share-btn">
          觀看全部收藏
        </button>
      </div>
    </div>
  );
}

export default MemHead;
