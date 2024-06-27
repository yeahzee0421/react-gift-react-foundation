import React from 'react';
import Item, { ItemProps } from '../Item';

export interface RankingItemProps extends ItemProps {
  rankingIndex: number;
}

const RankingItem: React.FC<RankingItemProps> = ({
  rankingIndex,
  ...itemProps
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'top',
  };

  const indexStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '4px 8px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bolder',
    zIndex: 999,
    background: '#EC7B6A',
    color: '#fff',
    marginLeft: '2px',
    marginTop: '2px',
  };

  return (
    <div style={containerStyle}>
      <div style={indexStyle}>{rankingIndex}</div>
      <Item {...itemProps} />
    </div>
  );
};

export default RankingItem;
