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
  book_list: Array<{
    name: string;
    date: string;
    price: number;
    count: number;
  }>;
};

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      msg: 'Hello React!',
      movies: ["The Dark Knight", "Memento", "The Lion King"],
      name: [],
      count: 0,
      book_list: [
        {
          name: 'JavaScript权威指南',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: 'Python编程从入门到实践',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: 'Java编程思想',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: 'C++ Primer',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: '深入理解计算机系统',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: '算法导论',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: '数据结构与算法分析',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: '深入理解Linux内核',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: 'UNIX环境高级编程',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: '计算机网络',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: '编译原理',
          date: '2019-10-10',
          price: 100,
          count: 1
        },
        {
          name: '软件工程',
          date: '2019-10-10',
          price: 100,
          count: 1
        }
      ]
    };
  }


  render() {  // 将这里的 () 替换为 {}
    // const name: Array<string | never> = [];

    // const a = <h1>{this.state.msg}</h1>;
    
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

        {/* 学习案例-图书管理 */}

        <div>
          <table className="book-table" style={{ border: '1px solid #ccc' }}>
            <thead>
              <tr className="table-header" style={{ background: '#f2f2f2' }}>
                <th></th>
                <th>书籍名称</th>
                <th>出版日期</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody style={{ border: '2px solid #000' }}> {/* 调整边框为更细的 2px */}
              {
                this.state.book_list.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.price}</td>
                    <td>{item.count}</td>
                    <td>
                    <Button type="primary" 
                      onClick={() => {
                        this.setState(prevState => ({
                          book_list: prevState.book_list.map((book, i) => {
                            if (i === index) {
                              return {
                                ...book,
                                count: book.count + 1
                              };
                            }
                            return book;
                          })
                        }));
                      }}
                    >+</Button>
                    <Button type="primary" 
                      onClick={() => {
                        this.setState(prevState => ({
                          book_list: prevState.book_list.map((book, i) => {
                            if (i === index) {
                              return {
                                ...book,
                                count: book.count - 1
                              };
                            }
                            return book;
                          })
                        }));
                      }}
                    >-</Button>
                    <Button type="primary" >删除</Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
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

