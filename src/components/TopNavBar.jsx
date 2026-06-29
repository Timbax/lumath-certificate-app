export default function TopNavBar() {
  return (
    <header className="bg-surface shadow-[0px_2px_4px_rgba(4,99,7,0.05)] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-md h-xl max-w-container-max mx-auto">
        <div className="flex items-center gap-lg">
          <h1 className="font-display text-headline-md text-primary tracking-tight">
            Emerald Docs
          </h1>
          <nav className="hidden md:flex items-center gap-md">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dashboard</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">History</a>
            <a className="font-label-md text-label-md text-primary font-semibold border-b-2 border-primary" href="#">Templates</a>
          </nav>
        </div>
        <div className="flex items-center gap-sm">
          <button className="bg-primary text-on-primary font-button text-button px-md py-xs rounded-lg hover:opacity-90 active:scale-95 transition-all">
            New Project
          </button>
          <div className="flex items-center gap-xs">
            <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
          <div className="w-xl h-xl rounded-full overflow-hidden ml-xs border border-outline-variant">
            <img
              className="w-full h-full object-cover"
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_3oa7q0AJX7bvJaZ7K15K59iD8MVA3_nhG881SNsCdAPjEw8CSykQiRgqYteWaLHnwf0otD_NUOMJdS-uTu7tZjOPviRVqzZXvsIjztCMZaT3mHytcE3KoztfFdrSLPdWGM4e50-BtrvJgRJbLNyulfrF_aBX2s1A7RvEhukKyjePI6KWWxzYg7sJaSqWfBj8AJiW-37pFuRLTL3iPbisVGnwFwWf5qW47G0gQJ9dlzUzo74_x3I5"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
