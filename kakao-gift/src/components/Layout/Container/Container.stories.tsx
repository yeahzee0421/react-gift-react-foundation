/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Container, { ContainerProps } from './Container'

export default {
    title: 'Layout/Container',
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        maxWidth: { control: 'text' },
        flexDirection: {
            control: {
                type: 'radio',
                options: ['row', 'column'],
            },
        },
        justifyContent: {
            control: {
                type: 'radio',
                options: [
                    'center',
                    'flex-start',
                    'flex-end',
                    'space-between',
                    'space-around',
                ],
            },
        },
        alignItems: {
            control: {
                type: 'radio',
                options: [
                    'center',
                    'flex-start',
                    'flex-end',
                    'baseline',
                    'stretch',
                ],
            },
        },
        children: { control: 'text' },
    },
} as Meta

const Template: StoryFn<ContainerProps> = (args) => (
    <Container {...args}>{args.children}</Container>
)

export const Default = Template.bind({})
Default.args = {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    children: 'Hello World!',
}
