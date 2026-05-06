function Contacts() {
  return (
    <section id="contacts" className="section">
      <h2>Контакти</h2>
      <div className="contacts-grid">
        <div className="contact-item">
          <span className="contact-icon">📍</span>
          <p>вул. Телевізійна 23, Дніпро</p>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🕐</span>
          <p>Пн-Сб 10:00 - 20:00</p>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <a href="tel:+380971977305">+380 97 197 73 05</a>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📸</span>
          <a href="https://instagram.com/__gurova.nail__" target="_blank" rel="noopener noreferrer">
            @__gurova.nail__
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacts
