export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-surface-container-lowest border-t border-outline-variant"
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-md px-md max-w-container-max mx-auto gap-md">
        <div className="flex flex-col md:flex-row items-center gap-md">
          <span className="font-headline-md text-headline-md">
            Joyeria Lumath | Joyeria Cartagena
          </span>
        </div>
        <div className="flex gap-md">
          <a
            href="https://portfolio-five-daniel-perez.vercel.app/"
            target="_blank"
          >
            © Copyright Daniel D. All Rights Reserved
          </a>
        </div>
      </div>
    </footer>
  );
}
