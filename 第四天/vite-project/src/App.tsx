import { Component } from 'react';
import CommentI from './CommentI';
import CommentO from './CommentO';
// import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'antd';


// 定义评论的类型
interface Comment {
  id: string | number;
  avatar: string;
  content: string;
  author: string;
  time: string;
}

// App 的状态接口
interface AppState {
  comments: Comment[];
  isVanish: boolean;
  hellos: string[];
}

// App 的 props 类型（如果没有 props，可以为空对象）
// interface AppProps {}

export default class App extends Component<never, AppState> {
  constructor(props: never) {
    super(props);
    this.state = {
      comments: [],
      isVanish: true,
      hellos: ['hello world', 'hello vite', 'hello react'],
    };
  }
  // 1.异步请求数据
  // async componentDidMount() {
  //   try {
  //     const res = await axios.get("https://httpbin.org/get", {
  //       params: {
  //         name: "张三"
  //       }
  //     })
  //     console.log(res);

  //   } catch (error) {
  //     console.log(error);
  //   }

  //   // axios.get("https://httpbin.org/get",{
  //   //     params: {
  //   //       name: "张三"
  //   //     }
  //   //   }).then(res => {
  //   //     console.log(res);
  //   //   }).catch(err => {
  //   //     console.log(err);
  //   //   });
  //   /*
  //     axios.post("https://httpbin.org/post",data: {
  //       name: "张三",
  //       age: 20
  //       }).then(res => {
  //       console.log(res);
  //       }).catch(err => {
  //         console.log(err);
  //       });

  //   */
  // }


  // react-transition-group 是一个用于在 React 应用中管理动画和过渡效果的库，主要提供以下四个核心组件，用于处理元素进入、退出和状态变化时的动画。这些组件是：
  // Transition：用于定义过渡动画，接收一个 children 元素，并在其进入和退出时触发动画；
  // CSSTransition：用于定义 CSS 过渡动画，接收一个 className 字符串，并在其进入和退出时触发动画；
  // SwitchTransition：用于在多个元素切换时，使用过渡动画；
  // TransitionGroup：用于包裹多个子元素，并在其进入和退出时触发动画。

  /*
  纯函数的特征

  可预测性：给定相同的输入，输出始终一致，便于测试和调试。
  独立性：不依赖外部变量或状态，也不改变外部环境。
  可缓存性：由于输出只依赖输入，可以缓存结果以提高性能（如记忆化）。
  可组合性：纯函数易于组合，适合函数式编程。
  
  */

  render() {

    const box: React.CSSProperties = {
      width: 300,
      height: 100,
      margin: "10px 0",
      backgroundColor: "#f0f0f0",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    }



    return (
      <div style={{ width: '50%', padding: '20px' }}>
        <AnimatePresence>
          {this.state.hellos.map((hello, index) => (
            <motion.div
              key={hello} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, type: 'spring' }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', ...box }}
            >
              <h1>{hello}</h1>
              <Button
                type="primary"
                onClick={() => {
                  this.setState({
                    hellos: this.state.hellos.filter((_, i) => i !== index),
                  });
                }}
              >
                删除
              </Button>
            </motion.div>
          ))}

          {/* {this.state.isVanish && (
          <motion.h1
            initial={{ 
              opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={box}
              key="box">
            Welcome to Vite!
          </motion.h1>
        )} */}
        </AnimatePresence>
        <button onClick={() => { this.setState({ isVanish: !this.state.isVanish }, () => { console.log(this.state.isVanish) }) }}>
          显示/隐藏
        </button>
        <div>
          {this.state.comments.map((comment, index) => (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <CommentO comment={comment} key={index} />

              </motion.div>
                
            </AnimatePresence>
          ))}

          <CommentI submitComment={this.submitComment} />
        </div>
      </div>
    );
  }

  submitComment = (info: Comment) => {
    console.log(info);
    this.setState({
      comments: [...this.state.comments, info],
    }, () => {
      console.log(this.state.comments);
    });
  };



}