/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Input, { InputProps } from './UnderlineTextField'

export default {
    title: 'Common/Form/Input/UnderlineTextField',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        invalid: {
            control: 'boolean',
        },
        size: {
            control: {
                type: 'select',
                options: ['respoinsive'],
            },
        },
    },
} as Meta

const Template: StoryFn<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    placeholder: 'placeholder',
    disabled: false,
    invalid: false,
    size: 'responsive',
}
