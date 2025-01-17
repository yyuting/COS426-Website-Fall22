// Library imports
import React from 'react';
// Project imports
import { AnchorTarget } from 'components';
// UI imports
import { makeStyles } from '@material-ui/core/styles';

// Custom styling for component
const anchorLinkStyles = makeStyles((theme) => ({
    anchorWrapper: {
        '&:hover $anchorSource': {
            display: 'inline-block',
        },
    },
    anchorSource: {
        color: theme.palette.text.primary,
        display: 'none',
        padding: '0 8px',
        '& svg': {
            fill: 'currentColor',
            width: '0.7em',
        },
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
}));

// Wraps the main content on the page
const AnchorLink = ({ children, id, setID = true }) => {
    const { anchorWrapper, anchorSource } = anchorLinkStyles();

    return (
        <div className={anchorWrapper}>
            {setID && <AnchorTarget id={id} />}
            {children}
            <a className={anchorSource} href={`#${id}`} aria-label='anchor'>
                <svg viewBox='0 0 16 16'>
                    <path d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z' />
                </svg>
            </a>
        </div>
    );
};

export default AnchorLink;
