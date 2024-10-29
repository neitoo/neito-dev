import { useState } from "react";

const useCopyToClipboard = (initialText: string) => {
    const [displayText, setDisplayText] = useState(initialText);
    const [isCopied, setIsCopied] = useState(false);

    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(initialText);
            setDisplayText('Скопировано!');
            setIsCopied(true);

            setTimeout(() => {
                setDisplayText(initialText);
                setIsCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Не удалось скопировать текст.", error);
        }
    };

    return {copyText,displayText,isCopied};
}

export default useCopyToClipboard;