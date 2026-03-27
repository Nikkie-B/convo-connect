export default function WhyUs() {
  return (
    <section className="site-why">

      <p className="section-kicker">The HR Reality</p>

      <h2 className="section-h2">
        ConvoConnect bridges the gap.
      </h2>

      <div className="why-grid">

        {/* CARD 1 (LIGHT + IMAGE) */}
        <div className="why-card card-light">
          <div className="why-card-img">
            <img src="/why1.jpeg" alt="" />
          </div>
          <div className="why-card-body">
            <p className="why-card-tag">The Gap</p>
            <h3 className="why-card-h3">What we see</h3>
            <p className="why-card-p">
              Teams are disengaged. Managers are underprepared. Culture exists on paper only. Retention suffers. Performance plateaus.
            </p>
          </div>
        </div>

        {/* CARD 2 (DARK — NO IMAGE) */}
        <div className="why-card card-dark">
            <div className="why-card-img">
            <img src="/why2.jpeg" alt="" />
          </div>
          <div className="why-card-body">
            <p className="why-card-tag">Our Answer</p>
            <h3 className="why-card-h3">What we do</h3>
            <p className="why-card-p">
              Facilitated conversations and experiential programmes that surface real dynamics, real trust, and real alignment — designed specifically for your people.
            </p>
          </div>
        </div>

        {/* CARD 3 (TEAL — NO IMAGE) */}
        <div className="why-card card-teal">
            <div className="why-card-img">
            <img src="/why3.jpeg" alt="" />
          </div>
          <div className="why-card-body">
            <p className="why-card-tag">Your Outcome</p>
            <h3 className="why-card-h3">What changes</h3>
            <p className="why-card-p">
              Teams that communicate better. Managers who lead with confidence. A culture people actively choose to stay in — not because they have to, but because they want to.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}