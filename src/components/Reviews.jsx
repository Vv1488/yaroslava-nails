const reviews = [
  { name: 'Олена', text: 'Найкращий манікюр у Дніпрі! Ярослава — майстер своєї справи.' },
  { name: 'Марія', text: 'Хожу вже пів року, завжди ідеально. Рекомендую!' },
  { name: 'Катерина', text: 'Швидко, якісно, з душею. Покриття тримаємо 3 тижні!' },
]

function Reviews() {
  return (
    <section id="reviews" className="section">
      <h2>Відгуки</h2>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <p className="review-text">"{r.text}"</p>
            <span className="review-name">— {r.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
