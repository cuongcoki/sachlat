import { useState } from "react";
import { X, Maximize2, Video, VideoOff } from "lucide-react";

function VideoPlayer({ videoUrl = "https://www.w3.org/WAV/df-8/testfiles/test-8000Hz-le-1ch-320kbps.wav" }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* Nút toggle ẩn/hiện video */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-24 left-4 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full shadow-2xl transition-all z-50"
        title={isVisible ? "Ẩn video" : "Hiện video"}
      >
        {isVisible ? <VideoOff size={18} /> : <Video size={18} />}
      </button>

      {/* Video nhỏ ở góc */}
      {isVisible && (
        <div
          onClick={() => setIsFullscreen(true)}
          className="fixed bottom-24 left-20 w-48 h-32 bg-black rounded-lg shadow-2xl cursor-pointer overflow-hidden group transition-transform hover:scale-105 z-40"
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
      )}

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