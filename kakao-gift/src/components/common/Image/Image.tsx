import React from 'react'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string
    width?: string
    ratio?: number | 'square'
    radius?: number | 'circle'
}

const getRadius = (radius?: number | 'circle'): string | undefined => {
    if (radius === 'circle') {
        return '50%'
    }
    if (typeof radius === 'number') {
        return `${radius}px`
    }
    return undefined
}

const Image: React.FC<ImageProps> = ({
    src,
    width = '100px',
    ratio = 'square',
    radius = 1,
}) => {
    let heightStyle: React.CSSProperties = {}

    if (ratio === 'square') {
        heightStyle = {
            width,
            height: width,
            objectFit: 'cover',
            borderRadius: getRadius(radius),
        }
    } else if (typeof ratio === 'number' && ratio > 0) {
        const paddingBottom = `${(1 / ratio) * 100}%`
        heightStyle = {
            width,
            paddingBottom,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: getRadius(radius),
        }
    }

    return <img src={src} style={heightStyle} alt="GoodsItem-Image-Preview" />
}

export default Image
