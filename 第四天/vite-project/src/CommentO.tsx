import { Component } from 'react';
import { Avatar, Typography, Tooltip, Space } from 'antd';
import './CommentO.css'; // 引入 CSS 文件以支持伪类样式

const { Text, Paragraph } = Typography;

// 定义评论的类型
interface Comment {
  id: string | number;
  avatar: string;
  content: string;
  author: string;
  time: string;
}

// CommentO 的 props 类型
interface Props {
  comment: Comment;
}

export default class CommentO extends Component<Props> {
  render() {
    const { id, avatar, content, author, time } = this.props.comment;

    return (
      
      <div
        className="comment-card"
        style={{
          display: 'flex',
          height: 'auto',
          borderRadius: '16px 16px 16px 0',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.05)',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)',
          marginBottom: 20,
          padding: 20,
          animation: 'fadeIn 0.5s ease-out',
          border: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <Space direction="vertical" size={12} style={{ alignItems: 'flex-start' }}>
          <Avatar
            src={avatar}
            alt={author}
            size={50}
            style={{
              border: '2px solid #e8f0fe',
              transition: 'transform 0.3s ease',
            }}
            className="avatar-hover"
          />
        </Space>
        <div style={{ marginLeft: 16, flex: 1 }}>
          <Space direction="horizontal" size={8} style={{ marginBottom: 6, alignItems: 'center' }}>
            <Text strong style={{ fontSize: 16, color: '#1a2b4c', fontWeight: 600 }}>
              {author}
            </Text>
            <Text type="secondary" style={{ fontSize: 12, color: '#7a8aa9' }}>
              #{id}
            </Text>
          </Space>
          <Paragraph
            style={{
              margin: 0,
              padding: '4px 0',
              color: '#334876',
              fontSize: 15,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {content}
          </Paragraph>
          <Tooltip title="评论时间">
            <Text
              type="secondary"
              style={{
                fontSize: 12,
                color: '#95a5b6',
                display: 'block',
                marginTop: 10,
                fontStyle: 'italic',
              }}
            >
              {time}
            </Text>
          </Tooltip>
        </div>
      </div>
    );
  }
}