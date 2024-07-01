/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from '@emotion/styled'

export interface ContainerProps {
    maxWidth?: string
    children?: React.ReactNode
    flexDirection?: 'row' | 'column'
    justifyContent?:
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
}

const StyledContainer = styled.div<ContainerProps>`
    display: flex;
    max-width: ${({ maxWidth }) => maxWidth || '100%'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems || 'stretch'};
    width: 100%;
    margin: 0 auto;
`

function Container({
    maxWidth,
    children,
    flexDirection,
    justifyContent,
    alignItems,
}: ContainerProps) {
    return (
        <StyledContainer
            maxWidth={maxWidth}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={alignItems}
        >
            {children}
        </StyledContainer>
    )
}

Container.defaultProps = {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export default Container
