import React from 'react'
import ReactMarkdown from 'react-markdown';

export const MarkdownAdvance  = ({content}) => {
    const processedContent = content
        ?.replace(/<b>(.*?)<\/b>/g, '**$1**')
        ?.replace(/<strong>(.*?)<\/strong>/g, '**$1**')
        ?.replace(/\r\n\r\n/g, '\n\n')
        ?.replace(/\r\n/g, '\n\n')
        ?.replace(/\r/g, '\n\n');

    return (
        <div>
            <ReactMarkdown>
                {processedContent}
            </ReactMarkdown>
        </div>
    );
}