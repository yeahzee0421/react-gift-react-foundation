import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
    title: 'common/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: ['kakao', 'default'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'large', 'responsive'],
            },
        },
        onClick: { action: 'clicked' },
    },
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    theme: 'kakao',
    size: 'responsive',
    children: '버튼',
    onClick: () => alert('버튼 클릭'),
}
