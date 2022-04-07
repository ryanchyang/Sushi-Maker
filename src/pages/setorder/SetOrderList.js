//選擇菜單的頁面
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuList from './components/SetMenuList';
import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './SetOrderAll.scss';
import config from '../../Config';
import NavPage from '../layout/components/NavPage';

function SetOrderList(props) {
  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  //今日日期
  function getTodayDate() {
    const fullDate = new Date();
    const yyyy = fullDate.getFullYear();
    const MM =
      fullDate.getMonth() + 1 >= 10
        ? fullDate.getMonth() + 1
        : '0' + (fullDate.getMonth() + 1);
    const dd =
      fullDate.getDate() < 10 ? '0' + fullDate.getDate() : fullDate.getDate();
    const today = yyyy + '-' + MM + '-' + dd;
    return today;
  }
  //data 選擇出來的答案
  const data = useLocation();
  //answer:從後 端傳出來的obj(json資料)
  const [answer, setAnswer] = useState({});
  //清單列選出來的component菜單陣列
  const [choose, setChoose] = useState([]);
  //被選到的便當 右邊清單的便當的中文標題
  const [selectTitle, setSelectTitle] = useState('');
  //被選到的便當 右邊清單的便當的英文標題
  const [selectTitleEng, setSelectTitleEng] = useState('');
  //被選到的便當 右邊清單
  const [select, setSelect] = useState([]);
  //被選到的便當 右邊清單的便當照片
  const [selectImg, setSelectImg] = useState('');
  //被選到的便當的id
  const [selectId, setSelectId] = useState(0);
  //推薦的套餐id
  const [numberid, setNumberid] = useState(0);
  //資料傳到後端後做完判斷,傳出結果
  //判斷登入
  const isLogin = localStorage.getItem('loginStatus');
  const history = useHistory();

  useEffect(() => {
    //如果沒有登入的話的判斷
    if (!isLogin) {
      // Hello();
      history.push('/member/login');
      return <></>;
    }
    const getData = async () => {
      const res = await fetch(config.GET_SET_COMPARE, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data.state),
      })
        .then(res => res.json())
        .then(obj => {
          //傳出結果
          //return 將obj資料丟到useEffect外面
          return obj;
        });
      // console.log('res', res);
      //init 結果弄成陣列

      const init = Array(7).fill(res[0]);
      setAnswer(init);
      setNumberid(res[0].number_id);
      setChoose(res);
      setSelect(res[0].sushiList);
      setSelectTitle(res[0].bento_ch_name);
      setSelectTitleEng(res[0].bento_en_name);
      setSelectImg(res[0].bento_img);
      setSelectId(res[0].bento_id);
      //list 比對清單
      // setList(res.rows);
    };
    getData();
  }, []);

  //月曆的useState
  const [date, setDate] = useState(getTodayDate);
  const today = getTodayDate();

  function setdateChange(e) {
    setDate(e.target.value);
  }
  //月曆設定
  if (date < today) {
    document.getElementById('date-error').style.display = 'block';
    document.getElementById('date-true').style.display = 'none';
  } else if (date > today) {
    document.getElementById('date-error').style.display = 'none';
    document.getElementById('date-true').style.display = 'block';
  }

  //吃幾週的useState
  const [week, setWeek] = useState('1');
  function weekChange(e) {
    setWeek(e.target.value);
  }

  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Just For You'} />

            <div className="setmenulist">
              <div className="mycontainer min-hi ">
                <p className="en-title-14-10 link-bread-set">
                  <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#575757' }}
                  >
                    HOME /
                  </Link>

                  <Link
                    to={'./stepstart'}
                    style={{ textDecoration: 'none', color: '#b03342' }}
                  >
                    SET
                  </Link>
                </p>
                <div className="set-list-title ch-title-22 link-bread-set">
                  推薦結果
                </div>

                <div className="set-list-all set-order-final">
                  <div className="set-list-left">
                    <div className="set-input-all align-items-center">
                      <div className="set-input-from ch-cont-14">從</div>
                      <input
                        min="2022-04-13"
                        className="set-input-date"
                        type="date"
                        value={date}
                        onChange={setdateChange}
                      />
                      <div className="set-input-from ch-cont-14">開始吃，</div>
                      <div className="set-input-from ch-cont-14">吃</div>
                      <select
                        name=""
                        id=""
                        className="set-week"
                        value={week}
                        onChange={weekChange}
                      >
                        <option
                          value="1"
                          sele
                          cted={+week === 1 ? true : false}
                        >
                          1
                        </option>
                        <option value="2" selected={+week === 2 ? true : false}>
                          2
                        </option>
                        <option value="3" selected={+week === 3 ? true : false}>
                          3
                        </option>
                        {/* <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option> */}
                      </select>
                      <div className="set-input-from ch-cont-14">週。</div>
                    </div>

                    <div
                      className="ch-cont-12 text-primary date-error"
                      style={{ display: 'none' }}
                      id="date-error"
                    >
                      *選擇日期不能比今日時間早
                    </div>
                    <div
                      className="ch-cont-12 text-light-bg date-error"
                      style={{
                        display: 'block',
                        color: '#f7f6f3',
                        userSelect: 'none',
                      }}
                      id="date-true"
                    >
                      xxxxxx
                    </div>
                    <div className="set-menu-title">
                      <div className="set-day-title en-cont-18">DAY</div>
                      <div className="set-bento-title ch-cont-16">每日套餐</div>
                    </div>
                    <SetMenuList
                      answer={answer}
                      choose={choose}
                      setAnswer={setAnswer}
                      select={select}
                      setSelect={setSelect}
                      selectTitle={selectTitle}
                      setSelectTitle={setSelectTitle}
                      selectTitleEng={selectTitleEng}
                      index={0}
                      setSelectImg={setSelectImg}
                      setSelectId={setSelectId}

                      // list={list}
                    />
                    <SetMenuList
                      answer={answer}
                      choose={choose}
                      setAnswer={setAnswer}
                      select={select}
                      setSelect={setSelect}
                      selectTitle={selectTitle}
                      setSelectTitle={setSelectTitle}
                      selectTitleEng={selectTitleEng}
                      setSelectImg={setSelectImg}
                      setSelectId={setSelectId}
                      index={1}
                      // list={list}
                    />
                    <SetMenuList
                      answer={answer}
                      choose={choose}
                      setAnswer={setAnswer}
                      select={select}
                      setSelect={setSelect}
                      selectTitle={selectTitle}
                      setSelectTitle={setSelectTitle}
                      selectTitleEng={selectTitleEng}
                      setSelectImg={setSelectImg}
                      setSelectId={setSelectId}
                      index={2}
                      // list={list}
                    />
                    <SetMenuList
                      answer={answer}
                      choose={choose}
                      setAnswer={setAnswer}
                      select={select}
                      setSelect={setSelect}
                      selectTitle={selectTitle}
                      setSelectTitle={setSelectTitle}
                      selectTitleEng={selectTitleEng}
                      setSelectImg={setSelectImg}
                      setSelectId={setSelectId}
                      index={3}
                      // list={list}
                    />
                    <SetMenuList
                      answer={answer}
                      choose={choose}
                      setAnswer={setAnswer}
                      select={select}
                      setSelect={setSelect}
                      selectTitle={selectTitle}
                      setSelectTitle={setSelectTitle}
                      selectTitleEng={selectTitleEng}
                      setSelectImg={setSelectImg}
                      setSelectId={setSelectId}
                      index={4}
                      // list={list}
                    />
                    <SetMenuList
                      answer={answer}
                      choose={choose}
                      setAnswer={setAnswer}
                      select={select}
                      setSelect={setSelect}
                      selectTitle={selectTitle}
                      setSelectTitle={setSelectTitle}
                      selectTitleEng={selectTitleEng}
                      setSelectImg={setSelectImg}
                      setSelectId={setSelectId}
                      index={5}
                      // list={list}
                    />
                    <SetMenuList
                      answer={answer}
                      choose={choose}
                      setAnswer={setAnswer}
                      select={select}
                      setSelect={setSelect}
                      selectTitle={selectTitle}
                      setSelectTitle={setSelectTitle}
                      selectTitleEng={selectTitleEng}
                      setSelectImg={setSelectImg}
                      setSelectId={setSelectId}
                      index={6}
                      // list={list}
                    />
                  </div>
                  <div className="set-list-right col-8">
                    <div className="set-view-all">
                      <div className="bento-img-element mx-auto">
                        <img
                          className="setorderlist-set-bento-img"
                          src={`http://localhost:3500/img/setorder/bento_img/${selectId}.png`}
                          alt="product-image"
                        />
                      </div>
                      <div className="bento-view-buttom align-items-center">
                        <div className="set-nutrient-btn">
                          <div className="set-nutrient-bento-name en-cont-28">
                            {selectTitle}
                          </div>
                          {/* <div className="btn btn-sm btn-outline-primary primeal-btn-outline-sm set-nutrient float-end">
                          營養成份
                        </div> */}
                        </div>
                      </div>
                      {/* 右邊的菜單 */}
                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          {select.map((selects, i) => {
                            return (
                              <div
                                className="set-menu-sushi col-12 col-12"
                                key={i}
                              >
                                <div className="set-menu-sushi col-12-ch ch-cont-16 mb-5">
                                  {selects.c_prod_ch_name}
                                </div>
                                {/* <div className="set-menu-sushi col-12-en en-cont-12">
                                {selects.c_prod_en_name}
                              </div> */}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="set-list-down row  d-flex justify-content-center justify-content-md-end mx-5 px-5">
                  <Link
                    to={{
                      pathname: './setorderfinal',
                      state: { date, week, choose, answer, numberid },
                    }}
                  >
                    <div className="set-order-list-buttom float-end btn btn-sm btn-outline-primary primeal-btn-outline-sm set-order-final">
                      下一步
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default SetOrderList;
