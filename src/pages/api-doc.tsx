import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { createSwaggerSpec } from 'next-swagger-doc'
import SwaggerUI from 'swagger-ui-react'

import _package from 'package.json'
import 'swagger-ui-react/swagger-ui.css'

const ApiDoc = ({ spec }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <SwaggerUI spec={spec} />
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    title: 'Genshin-API',
    version: _package.version,
    apiFolder: './api',
  })
  return {
    props: {
      spec,
    },
  }
}

export default ApiDoc
