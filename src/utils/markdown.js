import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import marksy from 'marksy';

function Link({ target, ...otherProps }) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a target={target || '_blank'} {...otherProps} />;
}

Link.propTypes = {
  target: PropTypes.string,
};

const compile = marksy({
  createElement,

  elements: {
    a: Link,
  },
});

export function renderMarkdown(md: string) {
  if (!md) { return null; }

  return compile(md).tree;
}
