import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react'
import RankingItem, { RankingItemProps } from './RankingItem'

export default {
    title: 'common/GoodsItem/RankingItem',
    component: RankingItem,
    tags: ['autodocs'],
} as Meta

const Template: StoryFn<RankingItemProps> = (args) => <RankingItem {...args} />
const imageUrl =
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png'

export const Default = Template.bind({})
Default.args = {
    rankingIndex: 1,
    imageSrc: imageUrl,
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
}
