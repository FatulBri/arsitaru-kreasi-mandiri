import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section
      id="proses"
      className="border-t border-line bg-paper"
      aria-labelledby="proses-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-taupe">
            Proses kerja
          </p>
          <h2
            id="proses-heading"
            className="mt-4 font-serif text-4xl leading-tight md:text-5xl"
          >
            Alur yang tenang, dari percakapan pertama hingga serah terima.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-0 border-t border-line md:grid-cols-5">
          {processSteps.map((step) => (
            <Reveal as="li" key={step.number} className="border-b border-line md:border-r md:border-b-0 md:last:border-r-0">
              <article className="flex h-full flex-col px-0 py-8 md:px-5 md:py-10">
                <p className="font-serif text-3xl text-taupe">{step.number}</p>
                <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
