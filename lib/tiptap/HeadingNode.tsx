import { Typography } from '@mui/material';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import { Node as ProseMirrorNode } from 'prosemirror-model';

interface Props {
  node: ProseMirrorNode;
  HTMLAttributes: Record<string, any>;
}

export default function HeadingNode({ node, HTMLAttributes }: Props) {
  return (
    <NodeViewWrapper>
      <Typography
        variant={`h${node.attrs.level as '1' | '2' | '3' | '4' | '5' | '6'}`}
        gutterBottom
        component="div"
        {...HTMLAttributes}
      >
        <NodeViewContent as="div" />
      </Typography>
    </NodeViewWrapper>
  );
}
