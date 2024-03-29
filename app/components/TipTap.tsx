'use client'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import { Editor } from '@tiptap/core'
import { useState } from 'react'
import StarterKit from '@tiptap/starter-kit'

export default function Tiptap({content}: {content: string}) {
  const [editorValue, setEditorValue] = useState(content)
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    onUpdate: ({ editor }) => {
      handleEditorChange(editor)
    },
    editorProps: {
      attributes: {
        name: "content",
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none'
      }
    },
    content
  })

  const handleEditorChange = (editor: Editor) => {
    setEditorValue(editor.getHTML())
  }

  const buttonStyles = (element: string, attributes? : {level: number} | undefined) => {
    const style = 'p-1 border rounded mx-1'
    const active = editor?.isActive(element, attributes)

    return style + (active ? ' bg-gray-400' : ' bg-gray-300')
  }

  return (
    <>
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonStyles('ul')}
        >
          list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
          className={buttonStyles('heading', {level: 2})}
        >
          heading
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonStyles('bold')}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonStyles('italic')}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={buttonStyles('strike')}
        >
          strike
        </button>
      </BubbleMenu>}
      <EditorContent editor={editor} />
      <input type="hidden" name="content" value={editorValue} />
    </>
  )
}
