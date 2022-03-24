import { useState, useEffect } from 'react';
import { eventsInfo } from '../../../WebApi';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    eventsInfo().then(obj => {
      console.log(obj);
      setEvents(obj);
    });
  }, []);

  if (events) {
    return events.map(v => {
      return (
        <>
          <div className="activeImg">
            <img
              src={
                events.length !== 0
                  ? 'http://localhost:3500/' + v.evnts_img_path
                  : ''
              }
              alt="cube"
              style={{ width: '100px' }}
            />
          </div>
          <div>
            <p className="ch-cont-18">
              {events.length !== 0 ? v.evnts_date : ''}
            </p>
            <div className="mx-5 ActTitle">
              <p className="ch-cont-18 ">
                {events.length !== 0 ? v.evnts_title : ''}
              </p>
              <Link
                to={'/latest-news/eventsdetail/' + v.evnts_id}
                style={{
                  textDecoration: 'none',
                  color: '#212121',
                }}
              >
                <p>(...詳情)</p>
              </Link>
            </div>
          </div>
        </>
      );
    });
  } else {
    return <div className="ActiveDetail col-md-8"></div>;
  }
};

export default Events;