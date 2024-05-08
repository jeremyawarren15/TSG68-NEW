import { Heading } from '@tiptap/extension-heading';
import { ReactNodeViewRenderer } from '@tiptap/react';
import HeadingNode from './HeadingNode';

const CustomHeading = Heading.extend({
  addNodeView() {
    return ReactNodeViewRenderer(HeadingNode);
  },
});

export default CustomHeading;
