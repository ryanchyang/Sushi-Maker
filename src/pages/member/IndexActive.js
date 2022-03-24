import { Header, AsideLeft, AsideRight, Footer } from './memLayout/LayoutLight';
import './index.scss';
import MemHead from './component/MemHead';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import config from '../../Config';
import { getMemId } from '../../utils';
import { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';

const locales = {
  'zh-TW': require('date-fns/locale/zh-TW'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// SQL
// [
//   {
//     evnts_id: 2,
//     evnts_title: '營養小知識講座',
//     evnts_date: '2022-05-07',
//     evnts_start_time: 2022-05-07T06:00:00.000Z,
//     evnts_end_time: 2022-05-07T09:00:00.000Z,
//     evnts_location: '台北市大安區復興南路一段390號2樓',
//     allDay:false
//   },
//   {
//     evnts_id: 4,
//     evnts_title: '3D列印是什麼?',
//     evnts_date: '2022-04-13',
//     evnts_start_time: 2022-04-13T02:00:00.000Z,
//     evnts_end_time: 2022-04-13T04:00:00.000Z,
//     evnts_location: '台北市大安區復興南路一段390號2樓',
//     allDay:false
//   },
//   {
//     evnts_id: 6,
//     evnts_title: '母親節快樂',
//     evnts_date: '2022-05-14',
//     evnts_start_time: 2022-05-14T05:00:00.000Z,
//     evnts_end_time: 2022-05-14T08:00:00.000Z,
//     evnts_location: '台北市大安區復興南路一段390號2樓',
//     allDay:false
//   }
// ]

function IndexActive() {
  const [allEvent, setAllEvent] = useState([]);
  const mem_id = getMemId();
  console.log('mem_id:', mem_id);

  const getActive = async () => {
    const res = await fetch(config.ACTIVE_PATH + `${mem_id}`);
    const obj = await res.json();
    console.log('obj:', obj);
    const events = obj.data.map(d => {
      return { ...d, start: new Date(d.start), end: new Date(d.end) };
    });
    //setAllEvent(obj.data);
    setAllEvent(events);
  };

  useEffect(() => {
    getActive();
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          {/* <Title title={''} /> */}
          <div className="member ">
            <MemHead />
            <div className="mycontainer">
              <Calendar
                localizer={localizer}
                events={allEvent}
                step={60}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: '50px' }}
              />
            </div>
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default IndexActive;
