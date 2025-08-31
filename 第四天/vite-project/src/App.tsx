import { Component, createContext } from 'react';
import CommentI from './CommentI';
import CommentO from './CommentO';
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

// 定义 Context 的类型
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// 创建 Context
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// App 的状态接口
interface AppState {
  comments: Comment[];
  isVanish: boolean;
  hellos: string[];
  theme: 'light' | 'dark';
}

// App 的 props 类型（空对象，因为没有 props）
type AppProps = object;

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      comments: [],
      isVanish: true,
      hellos: ['hello world', 'hello vite', 'hello react'],
      theme: 'light',
    };

    // 绑定 toggleTheme 方法
    this.toggleTheme = this.toggleTheme.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light',
    });
  }

  submitComment(info: Comment) {
    console.log(info);
    this.setState({
      comments: [...this.state.comments, info],
    }, () => {
      console.log(this.state.comments);
    });
  }

  render() {
    const contextValue: ThemeContextType = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme,
    };

    const box: React.CSSProperties = {
      width: 300,
      height: 100,
      margin: '10px 0',
      backgroundColor: this.state.theme === 'light' ? '#f0f0f0' : '#333',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: this.state.theme === 'light' ? '#000' : '#fff',
    };

    return (
      <div style={{ width: '50%', padding: '20px' }}>
        <ThemeContext.Provider value={contextValue}>
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
          </AnimatePresence>
          <button
            onClick={() => {
              this.setState(
                { isVanish: !this.state.isVanish },
                () => {
                  console.log(this.state.isVanish);
                }
              );
            }}
          >
            显示/隐藏
          </button>

          <div>
            {this.state.comments.map((comment, index) => (
              <AnimatePresence key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 1, type: 'spring' }}
                >
                  <CommentO comment={comment} />
                </motion.div>
              </AnimatePresence>
            ))}
            <CommentI submitComment={this.submitComment} />
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}