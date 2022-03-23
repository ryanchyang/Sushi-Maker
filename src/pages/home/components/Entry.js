import './entry.scss';

function Entry(props) {
  const { entryOpen, setEntryOpen } = props;

  return (
    <>
      <div
        className="entry"
        style={
          entryOpen ? { opacity: 1, zIndex: 200 } : { opacity: 0, zIndex: -100 }
        }
      >
        <div className="entry-area">
          <div className="logo-area">
            <div className="entry-logo">
              <img
                src={`http://localhost:3500/img/home/entry-logo.svg`}
                alt="primeal-logo"
              />
            </div>
            <div className="ch-logo">
              <img
                src={`http://localhost:3500/img/home/primeal-ch-logo.svg`}
                alt="primeal-logo"
              />
            </div>
          </div>
          <div className="loading-area">
            <p className="en-title-24 loading-txt">Loading...</p>
            <div className="progress">
              <div
                className="en-cont-18 progress-done"
                onAnimationEnd={() => {
                  console.log('transitionend');
                  setEntryOpen(false);
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entry;
