// Decorative gradient bars, [width, height] in px.
const left = [[72, 90], [60, 120], [40, 150], [60, 185], [90, 130], [50, 95]];
const right = [[25, 60], [85, 80], [80, 115], [50, 150], [63, 185], [50, 65], [37, 130], [100, 170]];

function Cluster({ bars, className }: { bars: number[][]; className: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute bottom-0 flex items-end ${className}`}>
      {bars.map(([w, h], i) => (
        <span
          key={i}
          style={{ width: w, height: h }}
          className="bg-linear-to-t from-primary-400/60 to-primary-200/10"
        />
      ))}
    </div>
  );
}

export function Bars() {
  return (
    <>
      <Cluster bars={left} className="left-0 origin-bottom-left scale-60 sm:scale-100" />
      <Cluster bars={right} className="right-0 origin-bottom-right scale-60 sm:scale-100" />
    </>
  );
}
