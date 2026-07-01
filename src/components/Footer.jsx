export default function Footer() {
  return (
    <footer id="footer" className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center py-md px-md max-w-container-max mx-auto gap-md">
        <div className="flex flex-col md:flex-row items-center gap-md">
          <span className="font-headline-md text-headline-md text-primary">
            Joyeria Lumath
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            &copy; 2026. All rights reserved.
          </span>
        </div>
        <div className="flex gap-md">
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors focus:underline"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors focus:underline"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors focus:underline"
            href="#"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
