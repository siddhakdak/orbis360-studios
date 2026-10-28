
const tours = [
  {
    title: "Virtual Tour Experience 01",
    url: "https://app.cloudpano.com/tours/t1LtFvj5DK",
  },
  {
    title: "Virtual Tour Experience 02",
    url: "https://app.cloudpano.com/tours/-CGyBUouS9",
  },
  {
    title: "Virtual Tour Experience 03",
    url: "https://app.cloudpano.com/tours/mr0UDORHf",
  },
];

export default function SampleTours() {
  return (
    <section className="bg-white px-5 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-900">
            Our Portfolio
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Explore Our 360° Virtual Tours
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Step inside spaces and experience every angle
            through immersive virtual tours by Orbis 360 Studios.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <div
              key={tour.url}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] bg-slate-100">
                <iframe
                  src={tour.url}
                  title={tour.title}
                  className="h-full w-full border-0"
                  allow="fullscreen; gyroscope; accelerometer; vr"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Sample Tour 0{index + 1}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {tour.title}
                </h3>

                <a
                  href={tour.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-semibold text-blue-900 hover:underline"
                >
                  Open Full Tour ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
