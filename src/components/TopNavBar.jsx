import Logo from "./Logo";

export default function TopNavBar() {
  return (
    <header id="navbar" className="bg-surface shadow-[0px_2px_4px_rgba(4,99,7,0.05)] sticky top-0 z-50" >
      <div className="flex justify-between items-center w-full px-md h-xl max-w-container-max mx-auto">
        <div className="flex items-center gap-lg">
          {/* <h1 className="font-display text-headline-md text-primary tracking-tight">
            Joyeria Lumath
          </h1> */}
          <Logo />
        </div>
        <div className="flex items-center gap-sm">
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
