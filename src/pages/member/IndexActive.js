import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
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
import DatePicker from 'react-datepicker';

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

// 假設活動data
const events = [
  {
    title: 'Meeting',
    allDay: true,
    start: new Date(2022, 3, 15),
    end: new Date(2022, 3, 15),
  },
  {
    title: 'Camping',
    allDay: true,
    start: new Date(2022, 3, 15),
    end: new Date(2022, 3, 15),
  },
  {
    title: 'Hiking',
    allDay: true,
    start: new Date(2022, 2, 15),
    end: new Date(2022, 2, 15),
  },
];

function IndexActive() {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvent, setAllEvent] = useState(events);
  // todo: membe_id先寫死
  const mem_id = 1;

  const getActive = async () => {
    const res = await fetch(config.ACTIVE_PATH + `${mem_id}`);
    const obj = await res.json();
    console.log('obj:', obj);
    setAllEvent(obj.data);
  };

  useEffect(() => {
    getActive();
  });

  // 處理活動更新
  // const handleAddEvent = () => {
  //   setAllEvent([...allEvent], newEvent);
  // };

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
                events={events}
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
