// Decorative "3D" objects drawn with CSS gradients, so the About section has no external image dependencies.
const base = 'aspect-square w-full';

export function Sphere() {
  return (
    <div
      className={`${base} rounded-full`}
      style={{
        background: 'radial-gradient(circle at 32% 28%, #f3e9ff 0%, #c47cff 28%, #5b1aa8 62%, #1a0633 100%)',
        boxShadow: '0 30px 60px rgba(120, 40, 200, 0.35), inset -18px -24px 40px rgba(0,0,0,0.45)',
      }}
    />
  );
}

export function Ring() {
  return (
    <div className={`${base} relative`} style={{ transform: 'rotate(-18deg)' }}>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 200deg, #ffd79a, #ff7a3d, #b2003f, #ff9a5a, #ffd79a)',
          WebkitMask: 'radial-gradient(circle, transparent 55%, #000 57%)',
          mask: 'radial-gradient(circle, transparent 55%, #000 57%)',
          boxShadow: '0 24px 50px rgba(255, 120, 60, 0.3)',
          filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.5))',
        }}
      />
    </div>
  );
}

export function Cube() {
  return (
    <div className={`${base} relative`} style={{ transform: 'rotate(14deg)' }}>
      <div
        className="absolute inset-[8%] rounded-[18%]"
        style={{
          background: 'linear-gradient(135deg, #e9fbff 0%, #5fd3ff 35%, #0d6fa8 70%, #062a45 100%)',
          boxShadow: '0 28px 56px rgba(40, 160, 255, 0.3), inset -14px -18px 36px rgba(0,0,0,0.45), inset 10px 10px 24px rgba(255,255,255,0.35)',
        }}
      />
    </div>
  );
}

export function Capsule() {
  return (
    <div className={`${base} relative`} style={{ transform: 'rotate(-32deg)' }}>
      <div
        className="absolute left-[10%] right-[10%] top-[30%] h-[40%] rounded-full"
        style={{
          background: 'linear-gradient(180deg, #fff6c2 0%, #ffd23f 40%, #c47a00 80%, #4a2a00 100%)',
          boxShadow: '0 26px 50px rgba(255, 200, 60, 0.3), inset 0 -12px 24px rgba(0,0,0,0.35), inset 0 10px 18px rgba(255,255,255,0.5)',
        }}
      />
    </div>
  );
}
