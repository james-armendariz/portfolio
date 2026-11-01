import React, { useEffect, useRef } from 'react';
import portrait from '../assets/portrait.jpg';
import { wallText } from '../data';

const GOLD = '#EAAA00';
const WHITE = '#FFFFFF';
const INK = '#0A0A08';
const HEX = [...Array(256).keys()].map((b) => b.toString(16).padStart(2, '0'));

// One sprite per byte, so thousands of cells cost a drawImage each instead of a fillText.
const buildAtlas = (cw, ch, dpr, font, color, label) => {
    const canvas = document.createElement('canvas');
    canvas.width = 16 * cw * dpr;
    canvas.height = 16 * ch * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let b = 0; b < 256; b++) {
        ctx.fillText(label(b), (b % 16) * cw + cw / 2, (b >> 4) * ch + ch / 2);
    }
    return canvas;
};

// Turns the photograph into per-cell brightness: figure kept, foliage and tree thrown away.
const samplePortrait = (img, cols, rows, narrow) => {
    const out = new Float32Array(cols * rows);
    const crop = { x: 250, y: 84, w: 208, h: 200 };
    const figRows = rows;
    const figCols = Math.min(cols, Math.round((figRows * crop.w * 0.9) / crop.h));
    const offX = narrow ? Math.round((cols - figCols) / 2) : Math.round(cols * 0.68 - figCols / 2);

    const canvas = document.createElement('canvas');
    canvas.width = figCols;
    canvas.height = figRows;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, crop.x, crop.y, crop.w, crop.h, 0, 0, figCols, figRows);
    const { data } = ctx.getImageData(0, 0, figCols, figRows);

    for (let y = 0; y < figRows; y++) {
        for (let x = 0; x < figCols; x++) {
            const p = (y * figCols + x) * 4;
            const r = data[p] / 255;
            const g = data[p + 1] / 255;
            const b = data[p + 2] / 255;
            const luma = 0.3 * r + 0.59 * g + 0.11 * b;
            const srcX = crop.x + (x / figCols) * crop.w;
            const green = (g - Math.max(r, b)) / (g + 0.04);
            let keep = 1 - Math.min(1, Math.max(0, green * 5));
            if (b > r * 1.05 && luma > 0.5) keep = 0; // sky through the leaves
            if (srcX > 458) keep = 0; // the tree trunk
            // A hard contrast curve, so beard, eyes and hair stay dark against skin and shirt.
            const lit = Math.min(1, Math.max(0, (luma - 0.3) / 0.42));
            const value = keep * (0.2 + 0.8 * lit * lit * (3 - 2 * lit));
            const i = y * cols + x + offX;
            if (i >= 0 && i < out.length) out[i] = value;
        }
    }
    return out;
};

const HexWall = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const bytes = new TextEncoder().encode(wallText);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const img = new Image();
        img.src = portrait;

        let cols = 0;
        let rows = 0;
        let cw = 0;
        let ch = 0;
        let dpr = 1;
        let hexAtlas = null;
        let charAtlas = null;
        let inkAtlas = null;
        let figure = new Float32Array(0);
        let flicker = new Float32Array(0);
        let wrong = new Uint8Array(0);
        let base = null;
        let lastFrame = 0;
        let frame = 0;
        let visible = true;
        const start = performance.now();
        const pointer = { x: -999, y: -999, r: 0, target: 0 };

        const layout = () => {
            const { width, height } = canvas.getBoundingClientRect();
            if (!width || !height) return;
            const narrow = width < 700;
            const fs = narrow ? 7 : 7.5;
            cw = Math.round(fs * 1.5);
            ch = Math.round(fs * 1.3);
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            cols = Math.ceil(width / cw);
            rows = Math.ceil(height / ch);
            hexAtlas = buildAtlas(cw, ch, dpr, `500 ${fs}px ui-monospace, Menlo, Consolas, monospace`, GOLD, (b) => HEX[b]); // taste-skill-ignore: a hex dump is literal code
            charAtlas = buildAtlas(cw, ch, dpr, `700 ${fs * 1.45}px ui-monospace, Menlo, Consolas, monospace`, WHITE, (b) => (b >= 32 && b < 127 ? String.fromCharCode(b) : '.')); // taste-skill-ignore: a hex dump is literal code
            inkAtlas = buildAtlas(cw, ch, dpr, `600 ${fs}px ui-monospace, Menlo, Consolas, monospace`, INK, (b) => HEX[b]); // taste-skill-ignore: a hex dump is literal code
            figure = img.complete && img.naturalWidth ? samplePortrait(img, cols, rows, narrow) : new Float32Array(cols * rows);
            flicker = new Float32Array(cols * rows);
            wrong = new Uint8Array(cols * rows);
            base = null;
        };

        // The settled wall, kept on its own canvas. A frame copies it once, then redraws only
        // the cells that differ, which is what keeps this cheap on a laptop.
        const paintBase = () => {
            base = document.createElement('canvas');
            base.width = canvas.width;
            base.height = canvas.height;
            const b = base.getContext('2d');
            const sw = cw * dpr;
            const sh = ch * dpr;
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const i = y * cols + x;
                    const byte = bytes[i % bytes.length];
                    const f = figure[i];
                    // Bright parts of the photograph become solid cells with the byte knocked out.
                    if (f > 0.24) {
                        b.globalAlpha = Math.min(1, Math.pow(f, 1.5) * 1.15);
                        b.fillStyle = GOLD;
                        b.fillRect(x * sw, y * sh, sw, sh);
                    }
                    b.globalAlpha = f > 0.6 ? 0.55 : Math.min(1, 0.1 + f * 1.1);
                    b.drawImage(f > 0.6 ? inkAtlas : hexAtlas, (byte % 16) * sw, (byte >> 4) * sh, sw, sh, x * sw, y * sh, sw, sh);
                }
            }
        };

        const sprite = (atlas, byte, x, y, alpha) => {
            const sw = cw * dpr;
            const sh = ch * dpr;
            ctx.globalAlpha = Math.min(1, alpha);
            ctx.drawImage(atlas, (byte % 16) * sw, (byte >> 4) * sh, sw, sh, x * cw, y * ch, cw, ch);
        };

        const draw = (now) => {
            if (!hexAtlas) return;
            if (!base) paintBase();
            const elapsed = now - start;
            pointer.r += (pointer.target - pointer.r) * 0.16;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.globalAlpha = 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(base, 0, 0);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!reduced) {
                // The opening wave: cells ahead of it are still scrambled.
                if (elapsed < 1100) {
                    const settled = elapsed / 1000;
                    for (let y = 0; y < rows; y++) {
                        const edge = Math.max(0, Math.floor((settled * 1.25 - 0.25 + (y / rows) * 0.25 - 0.1) * cols));
                        ctx.clearRect(edge * cw, y * ch, canvas.width, ch);
                        for (let x = edge; x < cols; x += 1) {
                            const byte = (bytes[(y * cols + x) % bytes.length] * 31 + y * 7 + x + Math.floor(elapsed / 60)) & 255;
                            sprite(hexAtlas, byte, x, y, 0.3);
                        }
                    }
                }

                // Bytes misreading for an instant.
                for (let n = 0; n < 24; n++) {
                    const i = Math.floor(Math.random() * flicker.length);
                    flicker[i] = now + 180 + Math.random() * 260;
                    wrong[i] = Math.floor(Math.random() * 256);
                }
                for (let i = 0; i < flicker.length; i++) {
                    if (flicker[i] > now) {
                        if (figure[i] > 0.24) continue;
                        const x = i % cols;
                        const y = Math.floor(i / cols);
                        ctx.clearRect(x * cw, y * ch, cw, ch);
                        sprite(hexAtlas, wrong[i], x, y, 0.4);
                    }
                }

                // A packet crossing the wall.
                const sweep = Math.floor(((now / 5200) % 1.3) * cols);
                for (let x = Math.max(0, sweep - 14); x < Math.min(cols, sweep); x++) {
                    const alpha = 0.32 * (1 + (x - sweep) / 14);
                    for (let y = 0; y < rows; y++) {
                        if (figure[y * cols + x] <= 0.24) sprite(hexAtlas, bytes[(y * cols + x) % bytes.length], x, y, alpha);
                    }
                }
            }

            // The lens: bytes inside it read as the text they are.
            if (pointer.r > 1) {
                const reach = Math.ceil(pointer.r / ch);
                const cy = Math.floor(pointer.y / ch);
                const cx = Math.floor(pointer.x / cw);
                const span = Math.ceil(pointer.r / cw);
                for (let y = Math.max(0, cy - reach); y <= Math.min(rows - 1, cy + reach); y++) {
                    for (let x = Math.max(0, cx - span); x <= Math.min(cols - 1, cx + span); x++) {
                        const dx = x * cw + cw / 2 - pointer.x;
                        const dy = y * ch + ch / 2 - pointer.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < pointer.r) {
                            ctx.clearRect(x * cw, y * ch, cw, ch);
                            sprite(charAtlas, bytes[(y * cols + x) % bytes.length], x, y, 1.3 - dist / pointer.r);
                        }
                    }
                }
            }
            ctx.globalAlpha = 1;
        };

        const loop = (now) => {
            if (visible && now - lastFrame > 32) {
                lastFrame = now;
                draw(now);
            }
            frame = requestAnimationFrame(loop);
        };

        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            pointer.x = e.clientX - rect.left;
            pointer.y = e.clientY - rect.top;
            pointer.target = Math.min(150, rect.width * 0.26);
            if (reduced) {
                pointer.r = pointer.target;
                draw(performance.now());
            }
        };
        const onLeave = () => {
            pointer.target = 0;
            if (reduced) {
                pointer.r = 0;
                draw(performance.now());
            }
        };

        layout();
        img.onload = () => {
            layout();
            if (reduced) draw(performance.now());
        };

        const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
        observer.observe(canvas);
        const resize = new ResizeObserver(() => {
            layout();
            if (reduced) draw(performance.now());
        });
        resize.observe(canvas);
        canvas.addEventListener('pointermove', onMove);
        canvas.addEventListener('pointerdown', onMove);
        canvas.addEventListener('pointerleave', onLeave);

        if (reduced) draw(performance.now());
        else frame = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
            resize.disconnect();
            canvas.removeEventListener('pointermove', onMove);
            canvas.removeEventListener('pointerdown', onMove);
            canvas.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="hexwall"
            role="img"
            aria-label="A wall of hexadecimal bytes, the text of James Armendariz's resume, with his portrait showing through in brighter gold."
        />
    );
};

export default HexWall;
