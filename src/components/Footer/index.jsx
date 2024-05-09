import './footer.css';

function Footer() {
  return (
    <div className="footer text-2xl">
      <div className="footer_top">
        <div className="footer_section footer_section1">
          <h2>Biblio-Tech</h2>
          <p>Join us and discover our multitude of books</p>
        </div>
        <div className="footer_section footer_section2">
          <h2>CONTACT US</h2>
          <p>Tel : +237 6 -- -- -- --</p>
          <p>E-mail : testexemple@gmail.com</p>
        </div>
        <div className="footer_section footer_section3">
          <h2>Speed Links</h2>
          <ul className=' flex flex-col gap-4'>
            <li><a href="/">Home</a></li>
            <li><a href="/book">Books</a></li>
            <li><a href="/event">Events</a></li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        copyright@2024 - Biblio-Tech | coded by <a href='/'>FTDcode</a>       
      </div>
    </div>
  )
}

export default Footer;
