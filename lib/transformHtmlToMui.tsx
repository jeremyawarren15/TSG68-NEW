import React from 'react';
import parse, { Element } from 'html-react-parser';
import { Typography } from '@mui/material';

export default function transformHtmlToMui(html: string) {
  const options = {
    replace: function (domNode: Element) {
      if (domNode.type === 'tag') {
        const { name, children } = domNode;
        if (name && name.match(/^h[1-6]$/)) {
          const variant = name as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
          const content =
            children.length > 0 && children[0].data ? children[0].data : '';

          return (
            <Typography variant={variant} gutterBottom>
              {content}
            </Typography>
          );
        }
      }
      return domNode;
    },
  };

  return parse(html, options);
}
