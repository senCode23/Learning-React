import { Button, Flex, Input } from 'antd';
import React, { Component } from 'react';
import moment from 'moment';


const { TextArea } = Input;

// 定义评论的类型
interface Comment {
    id: string | number;
    avatar: string;
    content: string;
    author: string;
    time: string;
}

// CommentI 的 props 类型
interface CommentIProps {
    submitComment: (comment: Comment) => void;
}

// CommentI 的 state 类型
interface CommentIState {
    value: string;
}

export default class CommentI extends Component<CommentIProps, CommentIState> {
    constructor(props: CommentIProps) {
        super(props);
        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <div>
                <Flex vertical gap={32}>
                    <TextArea
                        showCount
                        maxLength={100}
                        onChange={this.handleCommentChange}
                        value={this.state.value} // 使用 value 控制输入
                        placeholder="请输入评论"
                    />
                </Flex>
                <div style={{ marginTop: 25, display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                    <Button type="primary" autoInsertSpace={false} onClick={this.addComment}>
                        评论
                    </Button>
                    <Button danger type="primary" autoInsertSpace>
                        取消
                    </Button>
                </div>
            </div>
        );
    }

    handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            value: e.target.value,
        });
    };

    addComment = () => {
        const commentInfo: Comment = {
            id: moment().valueOf(),
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: this.state.value,
            author: 'user1',
            time: new Date().toLocaleString(),
        };

        this.setState({
            value: '',
        });
        this.props.submitComment(commentInfo);
    };
}