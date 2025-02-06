import React from 'react';
import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-[#272343] bg-white">
      <Loader className="animate-spin text-6xl mb-4" />
      <p className="text-2xl font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;