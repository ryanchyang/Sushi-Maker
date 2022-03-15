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
import { useState } from 'react';
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

function CalendarTest() {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvent, setAllEvent] = useState(events);

  function handleAddEvent() {
    setAllEvent([...allEvent], newEvent);
  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          {/* <Title title={''} />
              <br /> */}
          <div className="member ">
            <MemHead />
            {/* 以上不動 */}
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
export default CalendarTest;
