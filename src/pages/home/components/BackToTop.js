import { useWindowScroll } from 'react-use';
import { useEffect, useState } from 'react';

function BackToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  // Back to top
  useEffect(() => {
    if (pageYOffset > 3000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return false;
  }
  return (
    <>
      <div className="back-to-top d-none d-sm-block" onClick={scrollToTop}>
        <p className="back-to-top-text">Back To Top</p>
        <img
          src={`http://localhost:3500/img/home/index-backtotop.svg`}
          alt="back-to-top"
        />
      </div>
    </>
  );
}
export default BackToTop;
