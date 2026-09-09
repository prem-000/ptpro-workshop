'use client';

import React, { useEffect, useRef } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isMobile = width < 768;
    const nodeCount = isMobile ? 20 : 42;
    const maxConnectionDist = isMobile ? 120 : 180;
    const maxDistSq = maxConnectionDist * maxConnectionDist;

    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      driftAngle: number;
      driftSpeed: number;
      driftRadius: number;
      radius: number;
      color: string;
      pulsePhase: number;
    }

    // Approved palette: subtle AI purple & data cyan accents
    const palette = ['#7C5CFF', '#38BDF8', '#A78BFA', '#7DD3FC'];
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      nodes.push({
        x: rx,
        y: ry,
        baseX: rx,
        baseY: ry,
        driftAngle: Math.random() * Math.PI * 2,
        driftSpeed: 0.002 + Math.random() * 0.004,
        driftRadius: 3 + Math.random() * 5, // 2-8px drift as per Section 10
        radius: 1.5 + Math.random() * 1.5,
        color: palette[Math.floor(Math.random() * palette.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Section 10 Layer D: Approved AI technical labels
    const aiLabels = [
      'PROMPT://INPUT',
      'CONTEXT:ACTIVE',
      'MODEL://PROCESSING',
      'TOKEN:FLOW',
      'VECTOR:SPACE',
      'LATENT:STATE',
      'OUTPUT:READY',
      'RAG://INDEX',
      'AGENT:ACTIVE',
      'MODEL:SYNC',
    ];

    interface FloatingLabel {
      text: string;
      x: number;
      y: number;
      speedY: number;
      alpha: number;
      maxAlpha: number;
      fadeIn: boolean;
    }

    const labelCount = isMobile ? 3 : 8; // 6-12 max as per Section 10
    const labels: FloatingLabel[] = [];

    for (let i = 0; i < labelCount; i++) {
      labels.push({
        text: aiLabels[i % aiLabels.length],
        x: Math.random() * (width - 150) + 40,
        y: Math.random() * height,
        speedY: -0.15 - Math.random() * 0.15,
        alpha: 0.05 + Math.random() * 0.05,
        maxAlpha: 0.08 + Math.random() * 0.04, // 6-12% opacity
        fadeIn: Math.random() > 0.5,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Layer B: Update & draw nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        if (!prefersReducedMotion) {
          node.driftAngle += node.driftSpeed;
          node.x = node.baseX + Math.cos(node.driftAngle) * node.driftRadius;
          node.y = node.baseY + Math.sin(node.driftAngle) * node.driftRadius;
          node.pulsePhase += 0.015;
        }

        const pulse = (Math.sin(node.pulsePhase) + 1) * 0.5;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.08 + pulse * 0.04; // 6-12% opacity
        ctx.fill();
      }

      // Layer B: Draw connections
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            const factor = 1 - distance / maxConnectionDist;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = '#7C5CFF';
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = factor * 0.08; // 5-10% opacity
            ctx.stroke();

            // Layer C: Occasional traveling data pulse
            if (!prefersReducedMotion && (i + j) % 7 === 0) {
              const pulsePos = (Math.sin(nodes[i].pulsePhase) + 1) * 0.5;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * pulsePos;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * pulsePos;
              ctx.beginPath();
              ctx.arc(px, py, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = '#38BDF8';
              ctx.globalAlpha = factor * 0.2; // 15-25% opacity
              ctx.fill();
            }
          }
        }
      }

      // Layer D: Ambient AI Technical Labels
      ctx.font = '9px "JetBrains Mono", monospace';
      for (let b = 0; b < labels.length; b++) {
        const label = labels[b];
        if (!prefersReducedMotion) {
          label.y += label.speedY;
          if (label.fadeIn) {
            label.alpha += 0.001;
            if (label.alpha >= label.maxAlpha) label.fadeIn = false;
          } else {
            label.alpha -= 0.001;
            if (label.alpha <= 0.04) label.fadeIn = true;
          }

          if (label.y < -20) {
            label.y = height + 20;
            label.x = Math.random() * (width - 150) + 40;
            label.text = aiLabels[Math.floor(Math.random() * aiLabels.length)];
          }
        }

        const metrics = ctx.measureText(label.text);
        const padX = 6;
        const boxW = metrics.width + padX * 2;
        const boxH = 16;

        ctx.save();
        ctx.globalAlpha = label.alpha;
        ctx.fillStyle = '#080C12';
        ctx.strokeStyle = '#1B2835';
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(label.x - padX, label.y - 11, boxW, boxH, 3);
        } else {
          ctx.rect(label.x - padX, label.y - 11, boxW, boxH);
        }
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#A78BFA';
        ctx.fillText(label.text, label.x, label.y);
        ctx.restore();
      }

      ctx.globalAlpha = 1.0;

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#05070B]">
      {/* Layer A: Deep canvas slow ambient gradient meshes */}
      <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#7C5CFF]/10 via-[#38BDF8]/5 to-transparent blur-[160px]" />
      <div className="absolute top-[40%] -right-[15%] w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-[#38BDF8]/8 via-[#7C5CFF]/6 to-transparent blur-[160px]" />
      <div className="absolute -bottom-[20%] left-[30%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#7C5CFF]/8 via-transparent to-transparent blur-[160px]" />

      {/* Layer E: Abstract academic geometry / delicate dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(124,92,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Layer B & C & D: Interactive Living Neural Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle vignette depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#05070B_100%)] opacity-80" />
    </div>
  );
}
