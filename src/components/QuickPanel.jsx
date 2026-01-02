function QuickPanel({ isOpen, onClose }) {
    return (
      <>
        {/* PANEL */}
        <div
          className={`
            fixed top-0 right-0 h-screen w-full sm:w-[420px]
            bg-[rgb(101,255,75)]
            z-[60]
            transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="
              absolute top-6 right-6
              w-12 h-12 rounded-full
              bg-black flex items-center justify-center
              text-[rgb(101,255,75)] text-2xl
            "
          >
            ×
          </button>
  
          {/* Content */}
          <div className="px-8 pt-24 text-black space-y-10">
            <h2 className="text-2xl font-semibold">
              WalkThru Tech Pvt Ltd.
            </h2>
  
            <div>
              <h3 className="font-medium mb-2">Contact Us</h3>
              <ul className="space-y-2">
                <li>rajeev@walkthru.in</li>
                <li>+91-8595002877</li>
                <li>H-54, Sector-63, Noida</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* BACKDROP */}
        {isOpen && (
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[55]"
          />
        )}
      </>
    );
  }
  
  export default QuickPanel;
  