import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuList from './SetMenuList';
// import './SetOrderAll.scss';
function SetOrderList() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Just For You'} />
          <br />
          <SetMenuList />
          <SetMenuList />
          <SetMenuList />
          <SetMenuList />
          <SetMenuList />
          <SetMenuList />
          <SetMenuList />

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default SetOrderList;
