import { Component, useState } from 'react';
import { Button, Flex } from 'antd';
import Header from './Header';
import Footer from './Footer';

type AppProps = object;
interface AppState {
  msg: string;
  movies: Array<string>;
  name: Array<string | never>;
  count: number;
};

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      msg: 'Hello React!',
      movies: ["The Dark Knight", "Memento", "The Lion King"],
      name: [],
      count: 0
    };
  }


  render() {  // 将这里的 () 替换为 {}
    // const name: Array<string | never> = [];
    return (
      <div>
        <Header />

        <h1> {this.state.msg} </h1>

        <button onClick={() => this.fun1()}>Click me</button>
        <Flex gap="small" wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>

        <this.MyButton />
        <this.MyButton />

        <ol>
          {this.state.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ol>

        <ul>
          {
            this.state.name.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>

        <Button type="primary" onClick={() => {
          // this.setState(prevState{
          //   name: [...prevState.name,'123']
          // });

          this.setState(prevState => ({
            count: prevState.count + 1,
            name: [...prevState.name, `现在的数字是：${this.state.count}`] 
          }));

        }}>add</Button>
        <Footer />
      </div>
    );
  }

  fun1() {
    this.setState({
      msg: (this.state.msg == 'Hello React!') ? 'Goodbye React!' : 'Hello React!'
    });

    console.log('fun1');
  }

  MyButton() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
      <button onClick={handleClick}>
        点了 {count} 次
      </button>
    );
  }
}

