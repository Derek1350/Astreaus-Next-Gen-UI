import React, { useState } from 'react';

const CodeSnippet = ({ code, language }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        // A fallback for document.execCommand for environments where navigator.clipboard might be restricted (like some iframes)
        try {
            navigator.clipboard.writeText(code).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
            document.body.removeChild(textArea);
        }
    };


    return (
        <div className="bg-slate-900 rounded-lg overflow-hidden relative my-4 border border-slate-700">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-slate-700 text-slate-300 text-xs font-semibold px-3 py-1 rounded hover:bg-slate-600 transition-colors z-10"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
            <pre><code className={`language-${language} block p-4 text-sm overflow-x-auto`}>{code}</code></pre>
        </div>
    );
};

export default CodeSnippet;
