/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Grid, { GridProps } from './Grid'

const ChildComponent = () => {
    return (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
        </>
    )
}

export default {
    title: 'Layout/Grid',
    component: Grid,
    tags: ['autodocs'],
} as Meta

const Template: StoryFn<GridProps> = (args) => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
    columns: 4,
    gap: 0,
    children: <ChildComponent />,
}
