import React, { useState } from 'react';

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    if (!isOpen) return null;

    const handleSave = () => {
        if (title && content) {
            onSave(title, content);
            setTitle('');
            setContent('');
            onClose();
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                width: '400px',
            }}>
                <h2>Add Post</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        style={{ width: '100%', padding: '8px', height: '100px' }}
                    ></textarea>
                </div>
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={onClose} style={{ padding: '8px 16px' }}>Cancel</button>
                    <button onClick={handleSave} style={{ padding: '8px 16px' }}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
