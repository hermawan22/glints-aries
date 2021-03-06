// DOM utilities

/**
 * Returns a value when ESC button is triggered.
 *
 * @param  {Function} value
 * @return {Function}
 */
export function escEvent(value) {
  const listener = (e) => {
    if (e.keyCode === 27) {
      return value();
    }
    return 0;
  };

  return listener;
}

/**
 * Returns a value when Tab button is triggered.
 *
 * @param  {Function} value
 * @return {Function}
 */
export function tabEvent(value) {
  const listener = (e) => {
    if (e.keyCode === 9) {
      return value();
    }
    return 0;
  };

  return listener;
}
