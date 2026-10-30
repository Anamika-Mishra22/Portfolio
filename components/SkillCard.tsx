import Icon from "./Icon";
import type { SkillGroup } from "@/data/skills";

type Props = {
  group: SkillGroup;
  className?: string;
};

export default function SkillCard({ group, className = "" }: Props) {
  return (
    <div className={`glass rounded-3xl p-7 ${className}`}>
      <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-accent to-mid text-white shadow-lg">
        <Icon name={group.icon} />
      </span>

      <small className="block text-xs font-bold uppercase tracking-wider text-muted">
        {group.label}
      </small>
      <h3 className="font-display text-4xl md:text-5xl">{group.title}</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="glass rounded-full px-3.5 py-1.5 text-sm font-semibold transition hover:-translate-y-1 hover:bg-accent hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>

      {group.points && (
        <ul className="mt-5 space-y-1 text-muted">
          {group.points.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}