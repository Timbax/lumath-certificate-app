export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-surface-container-lowest border-t border-outline-variant"
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-md px-md max-w-container-max mx-auto gap-md">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-md text-center md:text-left">
          <div className="logo">
            <img src="images/logo-NoBg.png" alt="logo" className="h-16 w-auto" />
          </div>
          <div className="flex flex-col gap-xs text-body-md text-on-surface-variant">
            <span className="font-headline-md text-headline-md text-on-surface">Joyeria Lumath</span>
            <span>C. Comercial Getsemaní local 1B -39</span>
            <span>Cartagena, Colombia</span>
            <span>+57 304 2076725</span>
          </div>
        </div>
        <div id="copyright" className="flex gap-md text-center md:text-right">
          <a
            href="https://portfolio-five-daniel-perez.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
          >
            © Copyright Daniel D. All Rights Reserved
          </a>
        </div>
      </div>
    </footer>
  );
}
