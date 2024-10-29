import React from "react";
import useCopyToClipboard from "@hooks/useCopyToClipboard";

interface CopyTextProps {
    text: string;
}

const CopyText: React.FC<CopyTextProps> = ({text}) => {
    const { copyText, displayText, isCopied } = useCopyToClipboard(text);
    return (
        <p
            onClick={copyText}
            title="Скопировать"
            className={`cursor-pointer transition-colors duration-300 ${
                isCopied ? 'text-red-600' : 'text-white'
            }`}
        >
            {displayText}
        </p>
    );
}

export default CopyText;