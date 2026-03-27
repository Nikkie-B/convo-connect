export default function Programmes() {
  const programmes = [
    {
      title: "Trust & Communication",
      desc: "Experiences that break down invisible walls between people — inviting honest dialogue where habit has built silence.",
      tag: "Indoor · Any Size",
      img: "/prog1.jpeg",
    },
    {
      title: "Strategy & Problem Solving",
      desc: "High-pressure group challenges that reveal how a team truly works — who leads, who listens, and what gets in the way.",
      tag: "Indoor & Outdoor",
      img: "/prog2.jpeg",
    },
    {
      title: "Collaboration at Scale",
      desc: "Large-group experiences that mirror real organisational dynamics — competition, negotiation, and unified action.",
      tag: "Outdoor · Large Groups",
      img: "/prog3.jpeg",
    },
    {
      title: "Reflection & Purpose",
      desc: "Activities that slow the pace and deepen meaning — helping people connect personal growth to a shared team story.",
      tag: "Indoor · Small Groups",
      img: "/prog4.jpeg",
    },
  ];

  return (
    <section className="site-programmes">

    <div className="prog-intro">

    <p className="section-kicker">
        Programmes & Experiences
    </p>

    <h2 className="section-h2">
        Learning that engages every sense.
    </h2>

    <p className="prog-body">
        Our activities are carefully designed experiences that invoke the five human senses, 
        challenge perspectives, and create the kind of breakthroughs that traditional training 
        may not be able to.
    </p>

    </div>

      <div className="prog-grid">
        {programmes.map((item, i) => (
          <div className="prog-card" key={i}>

            {/* IMAGE */}
            <div className="prog-card-img">
              <img src={item.img} alt="" />
            </div>

            {/* CONTENT */}
            <div className="prog-card-body">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <div className="prog-tag">{item.tag}</div>
            </div>

          </div>
        ))}
      </div>

      <p className="prog-footnote">
        Every experience is custom-scoped to your team's size, culture, and goals. No two programmes are ever identical.
      </p>

    </section>
  );
}