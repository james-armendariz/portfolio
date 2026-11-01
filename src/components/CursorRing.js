import React, { useEffect, useRef } from 'react';

const RING = 18;
const TRAIL = 10;

// Ported from Cursor Overlay's overlay.html: a smoothed ring with a trail, a ring on
// left click, a burst on right click, and Alt+Shift+O to toggle it.
const CursorRing = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!finePointer || reduced) return undefined;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const cursor = { x: -100, y: -100 };
        const ring = { x: -100, y: -100 };
        const trail = [];
        let effects = [];
        let enabled = true;
        let frame = 0;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const draw = (now) => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            if (enabled) {
                ring.x += (cursor.x - ring.x) * 0.22;
                ring.y += (cursor.y - ring.y) * 0.22;
                trail.push({ x: ring.x, y: ring.y });
                if (trail.length > TRAIL) trail.shift();

                ctx.strokeStyle = '#fff';
                trail.forEach((point, i) => {
                    ctx.globalAlpha = (i / TRAIL) * 0.35;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, RING, 0, Math.PI * 2);
                    ctx.stroke();
                });
                ctx.globalAlpha = 1;
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.arc(ring.x, ring.y, RING, 0, Math.PI * 2);
                ctx.stroke();

                effects = effects.filter((effect) => now - effect.at < effect.life);
                effects.forEach((effect) => {
                    const t = (now - effect.at) / effect.life;
                    const out = 1 - Math.pow(1 - t, 3);
                    ctx.globalAlpha = 1 - t;
                    ctx.fillStyle = '#fff';
                    if (effect.kind === 'burst') {
                        for (let n = 0; n < 12; n++) {
                            const angle = (n / 12) * Math.PI * 2;
                            const d = out * 70;
                            ctx.beginPath();
                            ctx.arc(effect.x + Math.cos(angle) * d, effect.y + Math.sin(angle) * d, 3.5 * (1 - t) + 0.5, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    } else {
                        ctx.lineWidth = 3 * (1 - t) + 0.5;
                        ctx.beginPath();
                        ctx.arc(effect.x, effect.y, RING + out * 52, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                });
                ctx.globalAlpha = 1;
            }
            // Rest once everything has caught up, so an idle page costs nothing.
            const moving = Math.abs(cursor.x - ring.x) + Math.abs(cursor.y - ring.y) > 0.3;
            frame = enabled && (moving || effects.length) ? requestAnimationFrame(draw) : 0;
        };
        const wake = () => {
            if (!frame) frame = requestAnimationFrame(draw);
        };

        const onMove = (e) => {
            // The canvas stays out of the page until there is a pointer to follow.
            canvas.hidden = false;
            cursor.x = e.clientX;
            cursor.y = e.clientY;
            wake();
        };
        const onDown = (e) => {
            effects.push({
                x: e.clientX,
                y: e.clientY,
                at: performance.now(),
                life: e.button === 2 ? 620 : 480,
                kind: e.button === 2 ? 'burst' : 'ring'
            });
            wake();
        };
        const onKey = (e) => {
            if (e.altKey && e.shiftKey && e.code === 'KeyO') {
                enabled = !enabled;
                wake();
            }
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('pointermove', onMove, { passive: true });
        window.addEventListener('pointerdown', onDown, { passive: true });
        window.addEventListener('keydown', onKey);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', resize);
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerdown', onDown);
            window.removeEventListener('keydown', onKey);
        };
    }, []);

    return <canvas ref={canvasRef} className="cursor-ring" aria-hidden="true" hidden />;
};

export default CursorRing;
