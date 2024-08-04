import { useState, useEffect } from "react";

const useButtonEnabled = (selectedFile, selectedContractType, description) => {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        if (selectedFile && selectedFile.length > 0 && selectedContractType && description) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [selectedFile, selectedContractType, description]);

    return isButtonEnabled;
};

export default useButtonEnabled;
