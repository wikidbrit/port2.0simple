import { useState } from 'react';

/**
 * A helper hook that makes it easy to
 * re use the show/hide logic of modals.
 */
const useModalController = (initialValue = false) => {
  const [isShowing, setIsShowing] = useState(initialValue);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const open = () => {
    setIsShowing(true);
  };

  const close = () => {
    setIsShowing(false);
  };

  return {
    isShowing,
    toggle,
    open,
    close,
  };
};

export default useModalController;
