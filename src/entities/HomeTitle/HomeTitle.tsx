import React, { FC, ReactNode } from 'react'
import Title from 'antd/lib/typography/Title';

interface IHomeTitleProps {
    title: ReactNode
}

const HomeTitle: FC<IHomeTitleProps> = ({title}) => {
  return (
    <div>
        <Title>{title}</Title>
    </div>
  )
}

export default HomeTitle