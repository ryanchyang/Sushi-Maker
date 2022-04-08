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
import DeleteActiveModal from './component/DeleteActiveModal';
import NavPage from '../layout/components/NavPage';

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
//     "name": "State",
//     "value": [
//       {
//         "evnts_id": 2,
//         "evnts_signup_number": 2,
//         "id": 2,
//         "title": "營養小知識講座",
//         "start": "Sat May 07 2022 14:00:00 GMT+0800 (台北標準時間)",
//         "end": "Sat May 07 2022 17:00:00 GMT+0800 (台北標準時間)",
//         "desc": "台北市大安區復興南路一段390號2樓",
//         "allDay": false
//       },
//       "{allDay: false, desc: \"台北市大安區復興南路一段390號2樓\", end: We…}",
//       "{allDay: false, desc: \"台北市大安區復興南路一段390號2樓\", end: Sa…}"
//     ],
//     "subHooks": [],
//     "hookSource": {
//       "lineNumber": 22009,
//       "functionName": "IndexActive",
//       "fileName": "http://localhost:3000/static/js/bundle.js",
//       "columnNumber": 82
//     }
//   }
// ]

function IndexActive(props) {
  const [allEvent, setAllEvent] = useState([]);
  const [selected, setSelected] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const { navIsOpen, setNavIsOpen, isLogin } = props;
  const mem_id = getMemId();

  const getActive = async () => {
    const res = await fetch(config.ACTIVE_PATH + `${mem_id}`);
    const obj = await res.json();
    const events = obj.data.map(d => {
      return { ...d, start: new Date(d.start), end: new Date(d.end) };
    });
    setAllEvent(events);
  };

  useEffect(() => {
    getActive();
  }, [modalShow]);

  const handleSelected = event => {
    setModalShow(true);
    setSelected(event);
    console.info('[handleSelected - event]', event);
  };
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '75%' }}>
            {/* <Title title={''} /> */}
            <div className="member ">
              <MemHead isLogin={isLogin} />
              <div className="mycontainer">
                <Calendar
                  localizer={localizer}
                  events={allEvent}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500, margin: '50px' }}
                  selected={selected}
                  onSelectEvent={handleSelected}
                />
                {modalShow && (
                  <DeleteActiveModal
                    show={modalShow}
                    setModalShow={setModalShow}
                    selected={selected}
                    onHide={() => {
                      setModalShow(false);
                    }}
                  />
                )}
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} isLogin={isLogin} />
        </div>
      </div>
    </>
  );
}

export default IndexActive;
