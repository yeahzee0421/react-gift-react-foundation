import React from 'react';

export interface ItemProps {
  imageSrc?: string;
  subtitle?: string;
  title?: string;
  amount?: number;
}

const Item: React.FC<ItemProps> = ({
  imageSrc, subtitle, title, amount,
}) => {
  const boxStyle: React.CSSProperties = { display: 'block', width: '120px', overflow: 'hidden' };
  const imgStyle: React.CSSProperties = { width: '120px', height: '120px', objectFit: 'cover' };

  return (
    <div style={boxStyle}>
      <img className="thumbnail" src={imageSrc} style={imgStyle} alt="thumbnail" />
      <h5 style={{ fontWeight: 'lighter' }}>{subtitle}</h5>
      <h5 style={{ fontWeight: 'lighter', fontSize: '14px' }}>{title}</h5>
      <h3>
        {amount}
        원
      </h3>
    </div>
  );
};

export default Item;
