import React from 'react';

const Modifier = ({ modifier = '', children }) => {
  // TODO: Re-write using modifier as generic component
  // instead of trying to catch every case
  switch (modifier) {
    case 'bold':
      return <b>{children}</b>;
    case 'italic':
      return <i>{children}</i>;
    case 'underline':
      return <b>{children}</b>;
    case 'abbr':
      return <abbr>{children}</abbr>;
    case 'samp':
      return <samp>{children}</samp>;
    case 'mark':
      return <mark>{children}</mark>;
    case 'kbd':
      return <kbd>{children}</kbd>;
    case '':
      return children;
  }
}

const Modifiers = ({ modifiers = [], children }) => (
  (modifiers?.length > 0)
    ? (
      <Modifiers modifiers={modifiers.slice(1)}>
        <Modifier modifier={modifiers[0]}>{children}</Modifier>
      </Modifiers>
    )
    : children
)

export default Modifiers;
