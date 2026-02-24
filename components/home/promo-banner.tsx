import { lora } from '@/app/fonts';
import { Tag } from 'lucide-react';

const categories = [
  {
    label: 'Plastic Bags',
    style: 'border-red-700/30 bg-red-700/10 text-red-400',
    dot: 'bg-red-500'
  },
  {
    label: 'Butchery',
    style: 'border-neutral-700 bg-neutral-800/60 text-neutral-400',
    dot: 'bg-neutral-500'
  },
  {
    label: 'Bakery',
    style: 'border-amber-700/30 bg-amber-700/10 text-amber-500',
    dot: 'bg-amber-500'
  },
  {
    label: 'Food Service Supplies',
    style: 'border-red-700/30 bg-red-700/10 text-red-400',
    dot: 'bg-red-500'
  },
  {
    label: 'Spices',
    style: 'border-neutral-700 bg-neutral-800/60 text-neutral-400',
    dot: 'bg-neutral-500'
  },
  {
    label: 'Fomopaks',
    style: 'border-amber-700/30 bg-amber-700/10 text-amber-500',
    dot: 'bg-amber-500'
  }
];

export default function PromoBanner() {
  return (
    <div className="mx-auto max-w-7xl px-2 pb-0 pt-10">
      <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-darker px-6 md:px-10">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-900/20 blur-3xl" />
        <div className="pointer-events-none absolute -top-8 right-24 h-48 w-48 rounded-full bg-blue-900/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-8 h-40 w-40 rounded-full bg-yellow-900/15 blur-2xl" />

        <div className="relative grid grid-cols-1 items-center gap-8 px-8 py-8 md:grid-cols-2 md:py-8">
          {/* ── Left — Text Content ── */}
          <div>
            {/* Headline */}
            <h2
              className={`${lora.className} mb-4 text-5xl font-semibold leading-[1.2] text-neutral-100 md:text-6xl`}
            >
              Stock Up &amp; <br />
              <span className="">Save 15%</span>
            </h2>

            {/* Body */}
            <p className="mb-6 max-w-sm font-content text-sm leading-relaxed text-neutral-400">
              This August only — get <span className="font-semibold text-neutral-200">15% off</span>{' '}
              your entire order.
            </p>

            {/* Category tags */}
            <div>
              <p className="mb-3 font-content text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-600">
                Shop across
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span
                    key={cat.label}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-content text-xs font-medium ${cat.style}`}
                  >
                    <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${cat.dot}`} />
                    {cat.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right — Isometric Box Illustration ── */}
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 280 210"
              className="w-full max-w-[300px] md:max-w-[340px]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="pb-red-glow" cx="50%" cy="55%" r="50%">
                  <stop offset="0%" stopColor="#7f1d1d" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="pb-gold-glow" cx="70%" cy="65%" r="40%">
                  <stop offset="0%" stopColor="#78350f" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Ambient glows */}
              <ellipse cx="140" cy="130" rx="130" ry="85" fill="url(#pb-red-glow)" />
              <ellipse cx="200" cy="160" rx="80" ry="55" fill="url(#pb-gold-glow)" />

              {/* ── Hero box — centre (red) ── */}
              <polygon points="140,16 192,42 140,68 88,42" fill="#dc2626" />
              <polygon points="88,42 140,68 140,116 88,90" fill="#7f1d1d" />
              <polygon points="140,68 192,42 192,90 140,116" fill="#991b1b" />
              {/* Tape cross */}
              <line
                x1="140"
                y1="16"
                x2="140"
                y2="68"
                stroke="#fca5a5"
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />
              <line
                x1="88"
                y1="42"
                x2="192"
                y2="42"
                stroke="#fca5a5"
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />
              {/* Label on right face */}
              <rect x="152" y="76" width="22" height="14" rx="1" fill="#b91c1c" />
              <line
                x1="155"
                y1="81"
                x2="171"
                y2="81"
                stroke="#fca5a5"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              <line
                x1="155"
                y1="85"
                x2="168"
                y2="85"
                stroke="#fca5a5"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />

              {/* ── Left box — dark neutral ── */}
              <polygon points="75,106 118,128 75,150 32,128" fill="#3d3d3d" />
              <polygon points="32,128 75,150 75,186 32,164" fill="#1c1c1c" />
              <polygon points="75,150 118,128 118,164 75,186" fill="#2a2a2a" />
              <line
                x1="75"
                y1="106"
                x2="75"
                y2="150"
                stroke="#525252"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              <line
                x1="32"
                y1="128"
                x2="118"
                y2="128"
                stroke="#525252"
                strokeWidth="1"
                strokeOpacity="0.5"
              />

              {/* ── Right box — amber/gold ── */}
              <polygon points="205,106 248,128 205,150 162,128" fill="#a16207" />
              <polygon points="162,128 205,150 205,186 162,164" fill="#713f12" />
              <polygon points="205,150 248,128 248,164 205,186" fill="#854d0e" />
              <line
                x1="205"
                y1="106"
                x2="205"
                y2="150"
                stroke="#fbbf24"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              <line
                x1="162"
                y1="128"
                x2="248"
                y2="128"
                stroke="#fbbf24"
                strokeWidth="1"
                strokeOpacity="0.3"
              />

              {/* ── Discount badge ── */}
              <circle cx="218" cy="36" r="33" fill="#dc2626" />
              <circle
                cx="218"
                cy="36"
                r="28"
                fill="none"
                stroke="#fca5a5"
                strokeWidth="0.8"
                strokeOpacity="0.45"
                strokeDasharray="3 2.5"
              />
              <text
                x="218"
                y="29"
                textAnchor="middle"
                fontSize="20"
                fontWeight="bold"
                fill="white"
                fontFamily="Georgia, serif"
              >
                15%
              </text>
              <text
                x="218"
                y="49"
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="#fecaca"
                fontFamily="sans-serif"
                letterSpacing="2.5"
              >
                OFF
              </text>
              <line
                x1="192"
                y1="54"
                x2="200"
                y2="48"
                stroke="#dc2626"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
              <circle cx="192" cy="54" r="2" fill="#dc2626" fillOpacity="0.5" />

              {/* ── Sparkles ── */}
              <g transform="translate(42,26)">
                <line
                  x1="0"
                  y1="-7"
                  x2="0"
                  y2="7"
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="-7"
                  y1="0"
                  x2="7"
                  y2="0"
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="-4.5"
                  y1="-4.5"
                  x2="4.5"
                  y2="4.5"
                  stroke="#fbbf24"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeOpacity="0.55"
                />
                <line
                  x1="4.5"
                  y1="-4.5"
                  x2="-4.5"
                  y2="4.5"
                  stroke="#fbbf24"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeOpacity="0.55"
                />
              </g>
              <g transform="translate(255,88)">
                <line
                  x1="0"
                  y1="-5"
                  x2="0"
                  y2="5"
                  stroke="#f87171"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <line
                  x1="-5"
                  y1="0"
                  x2="5"
                  y2="0"
                  stroke="#f87171"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </g>
              <g transform="translate(22,162)">
                <line
                  x1="0"
                  y1="-4"
                  x2="0"
                  y2="4"
                  stroke="#fbbf24"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <line
                  x1="-4"
                  y1="0"
                  x2="4"
                  y2="0"
                  stroke="#fbbf24"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </g>

              {/* Dot accents */}
              <circle cx="60" cy="76" r="2.5" fill="#dc2626" fillOpacity="0.5" />
              <circle cx="250" cy="150" r="2.2" fill="#fbbf24" fillOpacity="0.45" />
              <circle cx="18" cy="108" r="1.8" fill="#dc2626" fillOpacity="0.35" />
              <circle cx="265" cy="60" r="1.8" fill="#fbbf24" fillOpacity="0.4" />
              <circle cx="138" cy="196" r="2" fill="#3d3d3d" fillOpacity="0.7" />
              <circle cx="172" cy="92" r="1.5" fill="#fca5a5" fillOpacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Brand accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-800 via-red-600 to-yellow-500" />
      </div>
    </div>
  );
}
