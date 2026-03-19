'use client'

// Logistics route network SVG — animated shipping lanes between global hubs
// Nodes roughly correspond to real port/logistics cities

const hubs = [
  { id: 'london',     x: 390,  y: 175, label: 'London' },
  { id: 'rotterdam',  x: 460,  y: 170, label: 'Rotterdam' },
  { id: 'hamburg',    x: 500,  y: 148, label: 'Hamburg' },
  { id: 'paris',      x: 420,  y: 220, label: 'Paris' },
  { id: 'casablanca', x: 370,  y: 320, label: 'Casablanca' },
  { id: 'dubai',      x: 830,  y: 310, label: 'Dubai' },
  { id: 'singapore',  x: 1080, y: 410, label: 'Singapore' },
  { id: 'shanghai',   x: 1140, y: 240, label: 'Shanghai' },
  { id: 'tokyo',      x: 1220, y: 210, label: 'Tokyo' },
  { id: 'newyork',    x: 145,  y: 200, label: 'New York' },
  { id: 'miami',      x: 165,  y: 320, label: 'Miami' },
  { id: 'lagos',      x: 465,  y: 410, label: 'Lagos' },
]

// Each route: [fromId, toId, speed, opacity]
const routes: [string, string, string, number][] = [
  ['newyork',   'london',    'route-line',      0.35],
  ['newyork',   'rotterdam', 'route-line-slow', 0.25],
  ['miami',     'casablanca','route-line-fast', 0.20],
  ['london',    'rotterdam', 'route-line',      0.40],
  ['rotterdam', 'hamburg',   'route-line',      0.40],
  ['paris',     'rotterdam', 'route-line-slow', 0.30],
  ['rotterdam', 'dubai',     'route-line',      0.45],
  ['london',    'dubai',     'route-line-slow', 0.25],
  ['casablanca','lagos',     'route-line-slow', 0.22],
  ['dubai',     'singapore', 'route-line',      0.45],
  ['dubai',     'shanghai',  'route-line-slow', 0.30],
  ['singapore', 'shanghai',  'route-line',      0.40],
  ['shanghai',  'tokyo',     'route-line',      0.38],
  ['lagos',     'dubai',     'route-line-slow', 0.18],
]

function getHub(id: string) {
  return hubs.find(h => h.id === id)!
}

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.18
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`
}

export default function LogisticsNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background ghost routes (static, very subtle) */}
        {routes.map(([from, to], i) => {
          const a = getHub(from), b = getHub(to)
          return (
            <path
              key={`ghost-${i}`}
              d={curvePath(a.x, a.y, b.x, b.y)}
              fill="none"
              stroke="rgba(0,217,255,0.07)"
              strokeWidth="1"
            />
          )
        })}

        {/* Animated flowing dashes */}
        {routes.map(([from, to, speed, opacity], i) => {
          const a = getHub(from), b = getHub(to)
          return (
            <path
              key={`flow-${i}`}
              d={curvePath(a.x, a.y, b.x, b.y)}
              fill="none"
              stroke={`rgba(0,217,255,${opacity})`}
              strokeWidth="1.5"
              className={speed}
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          )
        })}

        {/* Hub nodes */}
        {hubs.map((hub) => (
          <g key={hub.id}>
            {/* Outer ring */}
            <circle
              cx={hub.x}
              cy={hub.y}
              r={8}
              fill="none"
              stroke="rgba(0,217,255,0.15)"
              strokeWidth="1"
            />
            {/* Inner dot */}
            <circle
              cx={hub.x}
              cy={hub.y}
              r={3}
              fill="rgba(0,217,255,0.55)"
            />
            {/* City label */}
            <text
              x={hub.x + 12}
              y={hub.y + 4}
              fill="rgba(0,217,255,0.30)"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="0.05em"
            >
              {hub.label.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Subtle geographic dot matrix (background texture) */}
        {Array.from({ length: 40 }, (_, row) =>
          Array.from({ length: 60 }, (_, col) => {
            const x = col * 24 + 12
            const y = row * 16 + 8
            return (
              <circle
                key={`dot-${row}-${col}`}
                cx={x}
                cy={y}
                r={0.7}
                fill="rgba(148,163,184,0.08)"
              />
            )
          })
        )}
      </svg>
    </div>
  )
}
