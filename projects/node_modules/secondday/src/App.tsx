import { Component } from 'react';
import './App.css';

interface ChildProps {
  name: string;
  age: number;
}
// 类组件父子通信
class Child1 extends Component<ChildProps> {
  constructor(props: ChildProps) {
    super(props);
  }

  render() {

    const { name, age } = this.props;
    return (
      <div>
        <div>
          <h2>子组件展示: {"Hello " + name + " " + age}</h2>
          {/* <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}

// 函数组件父子通信
function Child2(props: { name: string; age: number; names: string[] }) {
  const { name, age, names } = props;
  return ( 
    <div>
      <h2>Child2</h2>
      <h2>子组件2展示: {"Hello " + name + " " + age}</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>  
  )
}


function FunSend(props: { clickHandle: () => void }) {
  return (
    <div>
      <h1>FunctionSend</h1>
      <button onClick={props.clickHandle}>Send</button>
    </div>
  )
}




function Music(props: {choiced: number}) {
  const choiced = props.choiced;

  return (
    <div>
      <h1>MusicKind: {choiced==0?"流行":choiced==1?"摇滚":"民谣"}</h1>
    </div>
  );
}

// 定义 App 组件的 state 类型
interface AppState {
  MusicName: string[];
  MusicAge: number[];
  choiced: number;
}

export default class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      MusicName: ["周杰伦", "陈奕迅", "林俊杰"],
      MusicAge: [ 25, 30, 28 ],
      choiced: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Father component</h1>
        <Child1 name="Ron" age={20} />
        <Child2 name="Tony" age={25} names={["Tom", "Jerry", "Mike"]}/>
        <button>Send</button>
        <FunSend  clickHandle={this.clickHandle} />


        <div className="music">
          <h1>MUSIC</h1>
          <div className='container'>
                <div className="item font-bold " onClick={()=>this.setState({choiced:0})}>流行</div>
                <div className="item" onClick={()=>this.setState({choiced:1})}>摇滚</div>
                <div className="item" onClick={()=>this.setState({choiced:2})}>民谣</div>
          </div>
          <Music  choiced={this.state.choiced} />
        </div>
      </div>
    );
  }

  private clickHandle = () => {
    console.log('clickHandle')
  }
}








