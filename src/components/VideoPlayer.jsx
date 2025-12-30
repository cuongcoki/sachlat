import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

function VideoPlayer({ videoUrl = "https://www.youtube.com/watch?v=j3xpL5hSKQc&list=RDj3xpL5hSKQc&start_radio=1" }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      {/* Video nhỏ ở góc */}
      <div
        onClick={() => setIsFullscreen(true)}
        className="fixed bottom-24 left-4 w-48 h-32 bg-black rounded-lg shadow-2xl cursor-pointer overflow-hidden group transition-transform hover:scale-105 z-40"
      >
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
          <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
        </div>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background đen mờ */}
          <div
            onClick={() => setIsFullscreen(false)}
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
          />

          {/* Video fullscreen */}
          <div className="relative z-10 w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center p-4">
            <video
              src={videoUrl}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              autoPlay
              loop
              controls
            />

            {/* Nút đóng */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors shadow-lg"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoPlayer;