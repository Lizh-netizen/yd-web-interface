import { useCallback, useState } from 'react'
import { Draft, freeze, produce } from 'immer'
// 2, 返回值
export type ImmerHook<S> = [S, Updater<S>]
export type DraftFunction<S> = (draft: Draft<S>) => void
export type Updater<S> = (arg: S | DraftFunction<S>) => void
// initiateValue可能是个对象，也可能是函数返回的值
export function useImmer<S = unknown>(initialValue: S | (() => S)): ImmerHook<S>

export function useImmer<T>(initialValue: T) {
  //3, 还是基于之前useState来初始化值，但是要通过immer的处理
  const [val, updateValue] = useState(() =>
    freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true),
  )
  // 1,写hook一般的操作是使用useCallBack，hook的返回一般是一个元祖，[],一个值和一个更新值的函数,避免重新创建函数
  //4 还是返回之前值
  return [
    val,
    useCallback((updater: Updater<T>) => {
      if (typeof updater === 'function') {
        updateValue(produce(updater))
      } else {
        updateValue(freeze(updater))
      }
    }, []),
  ]
}
