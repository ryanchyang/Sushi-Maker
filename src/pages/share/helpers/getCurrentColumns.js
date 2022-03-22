function getCurrentColumns(width) {
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
  };

  const getColumns = width => {
    if (width < breakpoints.sm) {
      return 2;
    } else if (width < breakpoints.md) {
      return 2;
    } else if (width < breakpoints.lg) {
      return 3;
    } else {
      return 4;
    }
  };

  return getColumns(width);
}

export default getCurrentColumns;
