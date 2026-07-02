import Logo from "./Logo";

export default function TopNavBar() {
  return (
    <header id="navbar" className="bg-surface shadow-[0px_2px_4px_rgba(4,99,7,0.05)] sticky top-0 z-50" >
      <div className="flex justify-between items-center w-full px-md h-xl max-w-container-max mx-auto">
        <div className="flex items-center gap-lg w-1/3"></div>
        <div className="flex items-center justify-center w-1/3">
          <Logo />
        </div>
        <div className="flex items-center gap-sm justify-end w-1/3">
          <div className="flex items-center gap-xs">
            <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
