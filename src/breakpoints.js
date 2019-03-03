export const TABLET_WIDTH = 800;
export const DESKTOP_WIDTH = 1200;

export const min = viewport => {
  const breakpoint = {
    tablet: TABLET_WIDTH,
    desktop: DESKTOP_WIDTH,
  }[viewport];

  return `@media (min-width: ${breakpoint}px)`;
};
