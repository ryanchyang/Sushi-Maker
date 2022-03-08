import './entry.scss'

function Entry() {
  return (
    <>
      <div className="entry">
        <div className="entry-area">
          <div className="logo-area">
            <div className="entry-logo">
              <img src="/img/home/entry-logo.svg" alt="primeal-logo" />
            </div>
            <div className="ch-logo">
              <img src="/img/home/primeal-ch-logo.svg" alt="primeal-logo" />
            </div>
          </div>
          <div className="loading-area">
            <p className="loading-txt">Loading...</p>
            <div className="progress">
              <div className="progress-done"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entry;
