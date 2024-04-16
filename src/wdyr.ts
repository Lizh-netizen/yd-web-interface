/// <reference types="@welldone-software/why-did-you-render" />
// 用于引入 "@welldone-software/why-did-you-render" 这个库的类型声明文件
import React from 'react'
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React, {
    onlyLogs: true,
    trackHooks: true,
    trackAllPureComponents: true,
  })
}
