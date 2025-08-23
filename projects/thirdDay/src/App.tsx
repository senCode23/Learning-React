
import React from 'react';
import { Component } from 'react';

// 定义 props 的类型（如果没有 props，可以留空）
interface AppProps {
  name: string;
}

// 定义 state 的类型
interface AppState {
  color: string;
}

export default class App extends Component<AppProps, AppState> {

  private inputRef = React.createRef<HTMLInputElement | null>();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      color: 'white',
    };
  }

  render() {
    return (
      <>
        <h1 ref={this.inputRef}>Hello React</h1>
        <h2
          style={{
            color: 'blue',
            fontSize: '20px',
            backgroundColor: this.state.color, // 直接使用 state 中的 color 值
          }}
        >
          这是一段 JSX 代码
        </h2>

        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          
        }}/>

        <button onClick={() => {
          console.log(this.inputRef.current?.innerText)
        }}>点击</button>
      </>
    );
  }
}


