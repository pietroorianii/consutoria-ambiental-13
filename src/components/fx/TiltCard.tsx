import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rx = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, (v) => `${v * 100}%`);
  const glowY = useTransform(y, (v) => `${v * 100}%`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { x.set(0.5); y.set(0.5); };

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`group/tilt relative h-full ${className}`}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY] as any,
            ([gx, gy]: any) => `radial-gradient(320px circle at ${gx} ${gy}, hsl(var(--brand-accent) / 0.14), transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
}
