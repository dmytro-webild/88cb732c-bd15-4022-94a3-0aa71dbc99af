import React from 'react';

interface SvgTextLogoProps {
  text: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  className?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  fontSize = 24,
  fontWeight = 700,
  letterSpacing = 0,
  className = '',
}) => {
  const textLength = text.length;
  const charWidth = fontSize * 0.6;
  const width = textLength * charWidth + letterSpacing * (textLength - 1);
  const height = fontSize * 1.2;
  const padding = 8;
  const viewBoxWidth = width + padding * 2;
  const viewBoxHeight = height + padding * 2;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      width={viewBoxWidth}
      height={viewBoxHeight}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x={padding + width / 2}
        y={padding + fontSize}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
