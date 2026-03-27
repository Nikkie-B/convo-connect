export default function About() {
  return (
    <section id="about" className="site-about">
      <div className="about-inner">

        {/* LEFT CONTENT */}
        <div>
          <p id="about" className="about-kicker">About</p>

          <h2 className="about-h2">
            Built on one belief: most org problems are <em>conversation problems.</em>
            </h2>

          <p className="about-p">
            ConvoConnect was born from a simple observation — most organisational problems are, at their core, conversation problems in disguise.
          </p>

          <p className="about-p">
            Disengaged teams, underperforming managers, stagnating cultures exist because real dialogue breaks down — and ConvoConnect acts to restore that dialogue.
          </p>

          <p className="about-p">
            Through structured facilitation, experiential design, and a deep understanding of how people actually work, we help HR leaders create environments where people are genuinely heard, meaningfully challenged, and consistently growing.
          </p>

          {/* PULL QUOTE */}
          <div className="about-pull">
            <p>
              "Trust is built in conversations, not org charts."
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-img">
          <img src="/about.jpeg" alt="About" />
        </div>

      </div>
    </section>
  );
}