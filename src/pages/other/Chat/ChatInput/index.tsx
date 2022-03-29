import style from './index.less'
import { Comment, Avatar, Form, Input, Button, message } from 'antd'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { debounce } from 'utils'

const { TextArea } = Input
export default function ChatInput(prop: any) {
  let [inputValue, setInputValue] = useState<string>('')

  const handleOnChange = (value: any) => {
    setInputValue(value.target.value)
  }

  const handleSendMessage = () => {
    if (inputValue === '') {
      message.warn('说点什么啊。')
      return
    } else {
      prop.sendFc(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className={classNames(style.wrap, 'ant-chat-wrap')}>
      <TextArea
        placeholder="在这发射！(≧∀≦)ゞ"
        autoSize={{ minRows: 4, maxRows: 4 }}
        className={style.input}
        value={inputValue}
        onChange={handleOnChange}
      />
      <Button
        onClick={handleSendMessage}
        type="primary"
        className={style.sendBtn}
      >
        发送
      </Button>
    </div>
  )
}
