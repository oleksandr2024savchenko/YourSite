import Reveal from "@/components/landing/Reveal";

export default function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-border/70 bg-surface/80">
      <div className="mx-auto grid max-w-6xl gap-3 px-6 py-5 sm:grid-cols-2 lg:grid-cols-6 lg:px-8">
        {items.map((item) => (
          <Reveal key={item}>
            <p className="text-center text-xs font-medium tracking-wide text-charcoal sm:text-sm">
              {item}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
