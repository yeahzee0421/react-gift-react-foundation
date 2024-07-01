/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from '@emotion/styled'

export interface GridProps {
    gap?: number
    columns: number
    children: React.ReactNode
}

const GridContainer = styled.div<{
    gap?: number
    columns: number
}>`
    display: grid;
    grid-template-columns: ${({ columns }) =>
        typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns};
    gap: ${({ gap }) => gap};
`
function Grid({ columns, gap, children, ...rest }: GridProps) {
    return (
        <GridContainer columns={columns} gap={gap} {...rest}>
            {children}
        </GridContainer>
    )
}

Grid.defaultProps = {
    gap: 0,
}

export default Grid
