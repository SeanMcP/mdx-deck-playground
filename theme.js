import { theme } from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
    ...theme,
    font:
        'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    colors: {
        text: 'white',
        background: 'black',
        link: '#0ff'
    },
    h1: {
        fontSize: '2rem'
    },
    prism: {
        style: okaidia
    }
};
