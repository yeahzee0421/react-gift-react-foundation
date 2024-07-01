import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react'
import Image, { ImageProps } from './Image'

export default {
    title: 'common/Image',
    component: Image,
    tags: ['autodocs'],
} as Meta

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />
const imageUrl =
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png'

export const RatioSquare = Template.bind({})
RatioSquare.args = {
    ratio: 'square',
    src: imageUrl,
    width: '100px',
}

export const RadiusCircle = Template.bind({})
RadiusCircle.args = {
    radius: 'circle',
    ratio: 'square',
    src: imageUrl,
    width: '100px',
}
