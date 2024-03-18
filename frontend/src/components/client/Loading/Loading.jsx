import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-50">
      <div className="border-8  border-t-8 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loading;