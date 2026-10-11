import { ZONES } from "./zones";
import { MAP_W, MAP_H, SERVICE_COUNTIES, CONTEXT_COUNTIES, TOWNS } from "./zone-map-data";

const HOME = "Unadilla";

// County label tweaks, as offsets from the county's center, where it would collide with a town label.
const COUNTY_LABELS: Record<string, { text?: string; dx?: number; dy?: number }> = {
  Bibb: { dx: -8, dy: 14 },
  Houston: { dx: 13, dy: 30 },
  Pulaski: { dy: 8 },
  Crisp: { dy: 16 },
  Dodge: { dy: 24 },
  Sumter: { dy: 22 },
  "Ben Hill": { dy: -14 },
  // Macon County vs. the city of Macon (which is in Bibb County) is the one easy-to-confuse pair.
  Macon: { text: "MACON CO." },
};

// Reference towns: where the label sits relative to the dot.
const TOWN_LABELS: Record<string, { text?: string; dx: number; dy: number; anchor?: "start" | "end" }> = {
  Macon: { text: "City of Macon", dx: 7, dy: 4 },
  "Warner Robins": { dx: 7, dy: 4 },
  Perry: { dx: 7, dy: 4 },
  Hawkinsville: { dx: 7, dy: 4 },
  Cordele: { dx: 7, dy: 4 },
  Americus: { dx: 7, dy: 4 },
  Eastman: { dx: 7, dy: 4 },
  Fitzgerald: { dx: 7, dy: 4 },
};

function zoneFor(county: string) {
  return ZONES.find((z) => z.counties.includes(county));
}

// SVG text with a white halo drawn underneath. Done as two elements instead of
// paint-order so it looks the same everywhere.
function HaloText({
  x, y, children, size, weight, fill, halo = 3.5, anchor,
}: {
  x: number; y: number; children: string; size: number; weight: number; fill: string; halo?: number; anchor?: "start" | "end";
}) {
  const common = { x, y, fontSize: size, fontWeight: weight, textAnchor: anchor ?? "start" } as const;
  return (
    <>
      <text {...common} fill="none" stroke="#ffffff" strokeWidth={halo} strokeLinejoin="round" aria-hidden="true">{children}</text>
      <text {...common} fill={fill}>{children}</text>
    </>
  );
}

export default function ZoneMap() {
  const [hx, hy] = TOWNS[HOME];
  return (
    <figure className="max-w-md mx-auto mb-8">
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        role="img"
        aria-labelledby="zone-map-title zone-map-desc"
        className="w-full h-auto"
      >
        <title id="zone-map-title">Travel fee zones by county</title>
        <desc id="zone-map-desc">
          {ZONES.map((z) => `${z.name} (${z.fee}): ${z.counties.join(", ")}`).join(". ")}. Based in Unadilla, Dooly County.
        </desc>

        {/* Neighboring counties for context */}
        <g fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1">
          {CONTEXT_COUNTIES.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Service counties */}
        <g stroke="#ffffff" strokeWidth="2" strokeLinejoin="round">
          {SERVICE_COUNTIES.map((c) => {
            const z = zoneFor(c.name);
            return (
              <path key={c.name} d={c.d} fill={z?.fill ?? "#f1f5f9"}>
                <title>{`${c.name} County: ${z?.name}, ${z?.fee.toLowerCase()}`}</title>
              </path>
            );
          })}
        </g>

        {/* County names (no halo needed: they sit on the zone fills) */}
        <g fontSize="13" fontWeight="700" textAnchor="middle" style={{ pointerEvents: "none" }} aria-hidden="true">
          {SERVICE_COUNTIES.map((c) => {
            const z = zoneFor(c.name);
            const o = COUNTY_LABELS[c.name] ?? {};
            return (
              <text key={c.name} x={c.cx + (o.dx ?? 0)} y={c.cy + (o.dy ?? 0)} fill={z?.dark ? "#ffffff" : "#0f172a"}>
                {o.text ?? c.name.toUpperCase()}
              </text>
            );
          })}
        </g>

        {/* Reference towns */}
        <g style={{ pointerEvents: "none" }} aria-hidden="true">
          {Object.entries(TOWN_LABELS).map(([t, l]) => {
            const [x, y] = TOWNS[t];
            return (
              <g key={t}>
                <circle cx={x} cy={y} r="3" fill="#334155" stroke="#ffffff" strokeWidth="1.5" />
                <HaloText x={x + l.dx} y={y + l.dy} size={12} weight={600} fill="#334155" anchor={l.anchor}>
                  {l.text ?? t}
                </HaloText>
              </g>
            );
          })}
        </g>

        {/* Home base: label sits to the left so it clears Hawkinsville */}
        <g style={{ pointerEvents: "none" }} aria-hidden="true">
          <circle cx={hx} cy={hy} r="9" fill="#ea580c" stroke="#ffffff" strokeWidth="3" />
          <HaloText x={hx - 15} y={hy + 5} size={13} weight={800} fill="#9a3412" halo={4} anchor="end">
            Unadilla (home base)
          </HaloText>
        </g>
      </svg>

      <figcaption className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
        {ZONES.map((z) => (
          <span key={z.name} className="inline-flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-sm border border-slate-300" style={{ backgroundColor: z.fill }} />
            {z.name} &middot; {z.fee}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
