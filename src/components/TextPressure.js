import { useEffect, useRef, useMemo } from 'react';

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const TextPressure = ({
  text = 'Hello',
  // Variable font — Inter supports wght 100-900 smoothly
  fontFamily = 'InterVariable',
  fontUrl = 'https://fonts.bunny.net/inter/files/inter-latin-variable-wghtOnly-normal.woff2',
  width = false,
  weight = true,
  italic = false,
  alpha = false,
  flex = true,
  stroke = false,
  textColor = 'inherit',
  strokeColor = '#FF0000',
  className = '',
  // Pass fontSize from parent so it matches heading size
  fontSize = 'inherit',
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const chars = text.split('');

  useEffect(() => {
    const handleMouseMove = e => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = e => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current = { ...mouseRef.current };
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    let rafId;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = Math.max(titleRect.width, 120);

        spansRef.current.forEach(span => {
          if (!span) return;
          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };
          const d = dist(mouseRef.current, charCenter);
          const wght = weight ? Math.floor(getAttr(d, maxDist, 400, 900)) : 400;
          const alphaVal = alpha ? getAttr(d, maxDist, 0.3, 1).toFixed(2) : 1;

          span.style.fontVariationSettings = `'wght' ${wght}`;
          if (alpha) span.style.opacity = alphaVal;
        });
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(rafId);
  }, [weight, italic, alpha]);

  const styleElement = useMemo(() => (
    <style>{`
      @font-face {
        font-family: '${fontFamily}';
        src: url('${fontUrl}');
        font-style: normal;
        font-weight: 100 900;
      }
      .text-pressure-inline {
        display: inline-flex;
        align-items: baseline;
        font-family: '${fontFamily}', 'Inter', system-ui, sans-serif;
      }
      .text-pressure-inline.flex {
        justify-content: space-between;
      }
      .text-pressure-inline span {
        display: inline-block;
      }
    `}</style>
  ), [fontFamily, fontUrl]);

  return (
    <span ref={containerRef} style={{ display: 'inline', fontSize: 'inherit' }}>
      {styleElement}
      <span
        ref={titleRef}
        className={`text-pressure-inline ${flex ? 'flex' : ''} ${stroke ? 'stroke' : ''} ${className}`}
        style={{
          fontSize: fontSize,
          fontWeight: 300,
          userSelect: 'none',
          whiteSpace: 'nowrap',
          color: textColor,
          letterSpacing: 'inherit',
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => (spansRef.current[i] = el)}
            data-char={char}
            style={{
              display: char === ' ' ? 'inline-block' : 'inline-block',
              width: char === ' ' ? '0.25em' : 'auto',
              color: stroke ? undefined : textColor,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
};

export default TextPressure;
