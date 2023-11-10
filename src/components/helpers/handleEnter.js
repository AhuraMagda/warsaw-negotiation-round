export const handleEnter = (event, callback) => {
    if (event.key === "Enter" && typeof callback === 'function') {
      callback();
    }
  };