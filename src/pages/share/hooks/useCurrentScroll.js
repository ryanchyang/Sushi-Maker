import { useState, useEffect } from 'react';

const getScroll = () =>
  window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

function useCurrentScroll() {
  // save current window width in the state object
  const [scroll, setScroll] = useState(getScroll());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setScroll(getScroll()), 150);
    };
    // set resize listener
    window.addEventListener('scroll', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('scroll', resizeListener);
    };
  }, []);

  return scroll;
}

export default useCurrentScroll;
