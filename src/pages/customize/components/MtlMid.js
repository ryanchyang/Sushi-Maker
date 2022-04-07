import { Link } from 'react-router-dom';

function MtlMid() {
  return (
    <>
      <div className="mid-area">
        <div className="layout-title navtitle">Customization</div>
        <div className="trail">
          {' '}
          <Link to={'/'} style={{ textDecoration: 'none', color: '#575757' }}>
            HOME
          </Link>{' '}
          /{' '}
          <Link to={''} style={{ textDecoration: 'none', color: '#b03342' }}>
            CUSTOMIZATION
          </Link>
        </div>
        <div className="threedArea"></div>
      </div>
    </>
  );
}

export default MtlMid;
