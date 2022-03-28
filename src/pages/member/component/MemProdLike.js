import { useState, useEffect } from 'react';
import { memCprodLike } from '../../../WebApi';
import { Link } from 'react-router-dom';

const mem_id = localStorage.getItem('mem_id');

const MemProdLike = () => {
  const [memLike, setMemLike] = useState();

  useEffect(() => {
    memCprodLike(mem_id).then(obj => {
      console.log(obj);
      setMemLike(obj);
    });
  }, []);

  if (memLike) {
    return memLike.map(v => {
      return (
        <>
          <Link
            to={'/classic/detail/' + v.pid}
            style={{
              textDecoration: 'none',
              color: '#212121',
            }}
          >
            <div className="activeImg">
              <img
                src={
                  memLike.length !== 0
                    ? 'http://localhost:3500/' + v.c_prod_img_path
                    : ''
                }
                alt="cube"
                style={{ width: '100px' }}
              />
              <div className="mt-2 ActTitle">
                <p className="ch-cont-18 ">
                  {memLike.length !== 0 ? v.c_prod_ch_name : ''}
                </p>
              </div>
            </div>
          </Link>
        </>
      );
    });
  } else {
    return <div className="ActiveDetail col-md-8"></div>;
  }
};

export default MemProdLike;
