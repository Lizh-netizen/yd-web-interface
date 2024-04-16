// 创建一个app组件
import Test from '@components/hello/Test'
const App = () => {
  return (
    <>
      <h1>hi</h1>
      <Test></Test>
    </>
  )
}
// 监控组件渲染
App.whyDidYouRender = true
export default App
