'use client';

import { useEffect, useRef } from 'react';

type ParticleNetworkProps = {
  particleCount?: number;
  maxDistance?: number;
  speed?: number;
  particleRadius?: number;
  className?: string;
};

/**
 * Particle network animation that fills its PARENT container
 * (not the full viewport). Wrap it in a positioned box, e.g.:
 *
 *   <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden">
 *     <ParticleNetwork />
 *   </div>
 *
 * The parent must have `position: relative` (or similar) and a
 * defined width/height for the canvas to size against.
 */
export function ParticleNetwork({
  particleCount = 40,
  maxDistance = 90,
  speed = 0.2,
  particleRadius = 1.6,
  className = 'particle-network-contained',
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let dotColor = 'rgba(255, 230, 150, 0.85)';
    let lineColorBase = 'rgba(180, 190, 220, 0.15)';

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      phase: number;
    };
    let particles: Particle[] = [];

    function readThemeColors() {
      const styles = getComputedStyle(document.documentElement);
      dotColor = styles.getPropertyValue('--particle-dot').trim() || dotColor;
      lineColorBase = styles.getPropertyValue('--particle-line').trim() || lineColorBase;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = parent!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      const cx = width / 2;
      const cy = height / 2;
      const baseRadius = Math.min(width, height) * 0.38;

      particles = Array.from({ length: particleCount }, (_, index) => {
        const t = index / particleCount;
        const band = Math.sin(t * 10) * 0.4 + 0.6;
        const angle = t * Math.PI * 2 + (index % 3) * 0.8;
        const radius = baseRadius * (0.26 + band * 0.74);
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * 0.8;

        return {
          x,
          y,
          vx: (Math.random() - 0.5) * speed * 1.6,
          vy: (Math.random() - 0.5) * speed * 1.6,
          size: particleRadius + Math.random() * 1.4,
          phase: Math.random() * Math.PI * 2,
        };
      });
    }

    function update() {
      const cx = width / 2;
      const cy = height / 2;

      for (const p of particles) {
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.hypot(dx, dy) || 1;

        p.x += p.vx + (dx / dist) * 0.025;
        p.y += p.vy + (dy / dist) * 0.025;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        p.x = Math.min(Math.max(p.x, 0), width);
        p.y = Math.min(Math.max(p.y, 0), height);
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctx!.globalAlpha = Math.max(alpha * 0.9, 0.08);
            ctx!.strokeStyle = lineColorBase;
            ctx!.lineWidth = 0.8 + alpha * 0.7;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 1;
      for (const p of particles) {
        const pulse = 1 + Math.sin((performance.now() * 0.002) + p.phase) * 0.14;
        const radius = Math.max(1.1, p.size * pulse);

        ctx!.beginPath();
        ctx!.fillStyle = dotColor;
        ctx!.shadowBlur = 12;
        ctx!.shadowColor = dotColor;
        ctx!.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    }

    function animate() {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    }

    readThemeColors();
    resize();
    createParticles();
    animate();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      createParticles(); // re-seed so particles aren't stuck out of bounds
    });
    resizeObserver.observe(parent);

    const themeObserver = new MutationObserver(readThemeColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      cancelAnimationFrame(animationId);
      draw();
    }

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  }, [particleCount, maxDistance, speed, particleRadius]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}