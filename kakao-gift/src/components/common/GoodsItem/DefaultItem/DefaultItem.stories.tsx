import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react'
import DefaultItem from './DefaultItem'

export default {
    title: 'common/GoodsItem/DefaultItem',
    component: DefaultItem,
    tags: ['autodocs'],
} as Meta

const Template: StoryFn = (args) => <DefaultItem {...args} />
const imageUrl =
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png'

export const Default = Template.bind({})
Default.args = {
    imageSrc: imageUrl,
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
}
