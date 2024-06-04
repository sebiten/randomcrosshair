import React, { useRef, useEffect } from 'react';
import d2 from '../../../public/d2.webp'; // Importa la imagen de fondo

interface CrosshairProps {
  size: number;
  thickness: number;
  gap: number;
  color: string;
  outline: boolean;
}

const CanvasCrosshair: React.FC<CrosshairProps> = ({ size, thickness, gap, color, outline }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      // Limpiar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Convertir color a formato rgb
      const [r, g, b] = color.split(" ").map(Number);

      if (outline) {
        // Dibujar el outline de la mira
        ctx.lineWidth = thickness * 5 + 3; // Ajustar el grosor del outline
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)'; // Outline negro con máxima opacidad
        drawCrosshair(ctx, canvas.width / 2, canvas.height / 2, size * 10, gap * 10);
      }

      // Dibujar la mira principal
      ctx.lineWidth = thickness * 4; // Escalar el grosor
      ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
      drawCrosshair(ctx, canvas.width / 2, canvas.height / 2, size * 10, gap * 10);
    }
  }, [size, thickness, gap, color, outline]);

  const drawCrosshair = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, gap: number) => {
    // Líneas verticales
    ctx.beginPath();
    ctx.moveTo(x, y - gap / 2 - size);
    ctx.lineTo(x, y - gap / 2);
    ctx.moveTo(x, y + gap / 2);
    ctx.lineTo(x, y + gap / 2 + size);
    ctx.stroke();

    // Líneas horizontales
    ctx.beginPath();
    ctx.moveTo(x - gap / 2 - size, y);
    ctx.lineTo(x - gap / 2, y);
    ctx.moveTo(x + gap / 2, y);
    ctx.lineTo(x + gap / 2 + size, y);
    ctx.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      className='aspect-h-16 dark:bg-slate-800 mt-2 rounded-xl'
    />
  );
};

export default CanvasCrosshair;
