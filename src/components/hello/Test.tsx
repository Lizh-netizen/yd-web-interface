import { useImmer } from '@hooks/useImmer'
// import { priceAtom } from '@states/index'
// import { useAtom } from 'jotai'
import { useEffect } from 'react'

const Test = () => {
  const [price, setPrice] = useImmer(() => ({
    a: 3,
  }))
  useEffect(() => {
    console.log('useEffect')
  }, [])
  const handleClick = () => {
    setPrice(draft => {
      draft.a = 1
    })
  }
  return (
    <>
      <span>{price.a}</span>
      <input onClick={handleClick}></input>
    </>
  )
}
Test.whyDidYouRender = true
export default Test
