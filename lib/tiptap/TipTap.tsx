'use client';

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import { Editor } from '@tiptap/core';
import { MouseEventHandler, useState } from 'react';
import StarterKit from '@tiptap/starter-kit';
import CustomHeading from './CustomHeading';
import { Button } from '@mui/material';

export default function Tiptap({ content }: { content: string }) {
  const [editorValue, setEditorValue] = useState(content);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      CustomHeading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
    ],
    onUpdate: ({ editor }) => {
      handleEditorChange(editor);
    },
    editorProps: {
      attributes: {
        name: 'content',
        class: '',
      },
    },
    content,
  });

  const handleEditorChange = (editor: Editor) => {
    setEditorValue(editor.getHTML());
  };

  interface Props {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    text: string;
  }

  const B = ({ onClick, text }: Props) => (
    <Button
      variant="contained"
      size="small"
      onClick={onClick}
      sx={{ m: 0.25, p: 1, fontSize: '.6rem' }}
    >
      {text}
    </Button>
  );

  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <B
            text="list"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          />
          <B
            text="heading"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          />
          <B
            text="bold"
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <B
            text="italic"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <B
            text="strike"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          />
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
      <input type="hidden" name="content" value={editorValue} />
    </>
  );
}
