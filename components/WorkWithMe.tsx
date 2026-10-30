type Offer = {
  label: string;
  title: string;
  text: string;
  points: string[];
};

const offers: Offer[] = [
  {
    label: "New opportunities",
    title: "Full-time roles",
    text: "Software developer and full-stack positions where I can build, learn and grow with a team.",
    points: [
      "Full-stack and MERN development",
      "React and Next.js frontends",
      "REST APIs and database work",
    ],
  },
  {
    label: "Freelance",
    title: "Projects for clients",
    text: "I take on freelance work end to end, from the first screen to the deployed site.",
    points: [
      "Responsive websites and landing pages",
      "Web apps and dashboards",
      "API integration and fixes",
    ],
  },
];

export default function WorkWithMe() {
  return (
    <section id="work" className="mx-auto max-w-6xl py-10">
      <h2 className="text-center font-display text-5xl md:text-6xl">
        Work with <em className="text-accent">me</em>
      </h2>
      <p className="mt-3 text-center text-muted">
        Open to new opportunities and freelance projects.
      </p>

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        {offers.map((offer) => (
          <div key={offer.title} className="glass rounded-3xl p-8 transition hover:-translate-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {offer.label}
            </span>
            <h3 className="mt-2 font-display text-4xl">{offer.title}</h3>
            <p className="mt-3 text-muted">{offer.text}</p>
            <ul className="mt-5 space-y-1.5 text-muted">
              {offer.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}