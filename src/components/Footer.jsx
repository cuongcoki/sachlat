import { useState } from "react";
import { Download, Grid3x3, List, Plus, Minus, Maximize2, Share2, Search, Printer, MoreVertical, Volume2, VolumeX, ChevronsLeft, ChevronsRight } from "lucide-react";
function Footer({ currentPage, totalPages, onPageChange, onZoomIn, onZoomOut, onResetZoom }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="w-full py-3 px-4 bg-[#1a2838] border-t border-gray-700">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
        {/* Page Counter */}
        <div className="text-white text-sm font-medium min-w-[60px]">
          {currentPage}/{totalPages}
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-1 flex-wrap">
          <button 
            onClick={() => onPageChange('first')}
            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition"
            title="Tới trang đầu"
          >
            <ChevronsLeft size={18} />
          </button>
          
          <button 
            onClick={() => onPageChange('last')}
            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition"
            title="Tới trang cuối"
          >
            <ChevronsRight size={18} />
          </button>

          <div className="w-px h-6 bg-gray-600 mx-1"></div>

          {/* Các nút view mode (giữ nguyên) */}
          <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition" title="Chế độ danh sách">
            <List size={18} />
          </button>

          <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition" title="Chế độ lưới">
            <Grid3x3 size={18} />
          </button>

          <div className="w-px h-6 bg-gray-600 mx-1"></div>

          {/* NÚT ZOOM - BÂY GIỜ HOẠT ĐỘNG */}
          <button 
            onClick={onZoomOut}
            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition"
            title="Thu nhỏ"
          >
            <Minus size={18} />
          </button>

          <button 
            onClick={onZoomIn}
            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition"
            title="Phóng to"
          >
            <Plus size={18} />
          </button>

          <div className="w-px h-6 bg-gray-600 mx-1"></div>

          <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition" title="Toàn màn hình">
            <Maximize2 size={18} />
          </button>

          <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition" title="Chia sẻ">
            <Share2 size={18} />
          </button>

          <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition" title="Tìm kiếm">
            <Search size={18} />
          </button>

          <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition" title="In">
            <Printer size={18} />
          </button>

          <div className="w-px h-6 bg-gray-600 mx-1"></div>

          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition"
            title={isMuted ? "Bật âm" : "Tắt âm"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* More Menu */}
          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition"
            >
              <MoreVertical size={18} />
            </button>

            {showMenu && (
              <div className="absolute bottom-full right-0 mb-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <button 
                  onClick={() => { onZoomOut(); setShowMenu(false); }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <Minus size={16} /> Thu nhỏ
                </button>
                <button 
                  onClick={() => { onZoomIn(); setShowMenu(false); }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <Plus size={16} /> Phóng to
                </button>
                <button 
                  onClick={() => { onResetZoom?.(); setShowMenu(false); }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <Maximize2 size={16} /> Đặt lại thu phóng
                </button>
                <div className="border-t border-gray-200 my-1"></div>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                  <Download size={16} /> Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;