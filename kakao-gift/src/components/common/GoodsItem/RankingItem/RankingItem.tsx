import React from 'react'
import Item, { ItemProps } from '../Item'
// import { COLORS } from '@/utils/styles'
import { COLORS } from '../../../../utils/styles'

export interface RankingItemProps extends ItemProps {
    rankingIndex: number
}

const RankingItem: React.FC<RankingItemProps> = ({
    rankingIndex,
    ...itemProps
}) => {
    const containerStyle: React.CSSProperties = {
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'top',
    }

    const indexStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '4px 8px',
        borderRadius: '5px',
        fontSize: '12px',
        fontWeight: 'bolder',
        zIndex: 999,
        marginLeft: '2px',
        marginTop: '2px',
    }
    if (rankingIndex >= 1 && rankingIndex <= 3) {
        indexStyle.backgroundColor = COLORS.top3Color
        indexStyle.color = COLORS.whiteColor
    } else {
        indexStyle.backgroundColor = COLORS.otherRankColor
        indexStyle.color = COLORS.blackColor
    }

    return (
        <div style={containerStyle}>
            <div style={indexStyle}>{rankingIndex}</div>
            <Item {...itemProps} />
        </div>
    )
}

export default RankingItem
