import React from 'react'

const Character = ({ id, name }: any) => {
  console.log(id, name)

  return <div />
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { name: 'shogun' } }, { params: { id: '321' } }],
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params }: GetStaticPropsContext) {
//   return { props: { name: params?.props?[0], id: params?.props?[1] },  }
// }

export default Character
