import Head from 'next/head'
import React from 'react'

type TProps = {
  title: string
}

const HeadComponent: React.FC<TProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
)

export default HeadComponent
