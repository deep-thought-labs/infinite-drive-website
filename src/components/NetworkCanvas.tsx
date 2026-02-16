import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  originalRadius: number;
  currentRadius: number;
  targetRadius: number;
  color: string;
  targetColor: string;
  currentColor: string;
  colorVariant: 'cyan' | 'magenta' | 'purple' | 'default';
  baseColor: string;
}

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    // Initialize nodes with subtle color variants
    const initNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      // Color palette - very subtle variants
      const colorPalette = [
        { variant: 'default' as const, base: '#5d6875', hover: '#00d9ff' },
        { variant: 'cyan' as const, base: 'rgba(0, 217, 255, 0.15)', hover: '#00d9ff' },
        { variant: 'magenta' as const, base: 'rgba(217, 70, 239, 0.12)', hover: '#d946ef' },
        { variant: 'purple' as const, base: 'rgba(138, 43, 226, 0.1)', hover: '#8a2be2' },
      ];
      
      for (let i = 0; i < nodeCount; i++) {
        // Most nodes default, some with subtle color hints
        const rand = Math.random();
        let colorChoice;
        
        if (rand < 0.7) {
          colorChoice = colorPalette[0]; // 70% default gray
        } else if (rand < 0.85) {
          colorChoice = colorPalette[1]; // 15% subtle cyan
        } else if (rand < 0.95) {
          colorChoice = colorPalette[2]; // 10% subtle magenta
        } else {
          colorChoice = colorPalette[3]; // 5% subtle purple
        }
        
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          originalRadius: 1.5,
          currentRadius: 1.5,
          targetRadius: 1.5,
          color: colorChoice.base,
          targetColor: colorChoice.base,
          currentColor: colorChoice.base,
          colorVariant: colorChoice.variant,
          baseColor: colorChoice.base
        });
      }
      
      nodesRef.current = nodes;
    };

    // Interpolate color
    const lerpColor = (color1: string, color2: string, factor: number): string => {
      // Handle rgba colors
      if (color1.startsWith('rgba') || color2.startsWith('rgba')) {
        return factor > 0.5 ? color2 : color1;
      }
      
      const hex1 = color1.replace('#', '');
      const hex2 = color2.replace('#', '');
      
      const r1 = parseInt(hex1.substr(0, 2), 16);
      const g1 = parseInt(hex1.substr(2, 2), 16);
      const b1 = parseInt(hex1.substr(4, 2), 16);
      
      const r2 = parseInt(hex2.substr(0, 2), 16);
      const g2 = parseInt(hex2.substr(2, 2), 16);
      const b2 = parseInt(hex2.substr(4, 2), 16);
      
      const r = Math.round(r1 + (r2 - r1) * factor);
      const g = Math.round(g1 + (g2 - g1) * factor);
      const b = Math.round(b1 + (b2 - b1) * factor);
      
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    // Draw
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nodes = nodesRef.current;
      const hoverDistance = 60;

      // Update nodes based on mouse proximity
      nodes.forEach(node => {
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < hoverDistance) {
          node.targetRadius = 5;
          // Use variant-specific hover color
          if (node.colorVariant === 'cyan') {
            node.targetColor = '#00d9ff';
          } else if (node.colorVariant === 'magenta') {
            node.targetColor = '#d946ef';
          } else if (node.colorVariant === 'purple') {
            node.targetColor = '#8a2be2';
          } else {
            node.targetColor = '#00d9ff';
          }
        } else {
          node.targetRadius = 1.5;
          node.targetColor = node.baseColor;
        }

        // Smooth transitions
        node.currentRadius += (node.targetRadius - node.currentRadius) * 0.15;
        if (!node.currentColor.startsWith('rgba') && !node.targetColor.startsWith('rgba')) {
          node.currentColor = lerpColor(node.currentColor, node.targetColor, 0.15);
        } else {
          node.currentColor = node.targetColor;
        }
      });

      // Draw connections with subtle color gradients
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            // Subtle color tinting based on node variants
            let strokeColor = 'rgba(93, 104, 117, 0.2)';
            
            if (nodes[i].colorVariant === 'cyan' || nodes[j].colorVariant === 'cyan') {
              strokeColor = 'rgba(0, 217, 255, 0.08)';
            } else if (nodes[i].colorVariant === 'magenta' || nodes[j].colorVariant === 'magenta') {
              strokeColor = 'rgba(217, 70, 239, 0.06)';
            } else if (nodes[i].colorVariant === 'purple' || nodes[j].colorVariant === 'purple') {
              strokeColor = 'rgba(138, 43, 226, 0.05)';
            }
            
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.fillStyle = node.currentColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.currentRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow for colored nodes when hovered
        if (node.currentRadius > 2 && node.colorVariant !== 'default') {
          ctx.shadowBlur = 10;
          ctx.shadowColor = node.currentColor;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
