import { useEffect } from "react";

const useAutoNextStep = (step, dispatch, nextStep) => {
    useEffect(() => {
        if (step === 3) {
            const timer = setTimeout(() => {
                dispatch(nextStep());
            }, 3000);
            return () => clearTimeout(timer);
        }
    });
};

export default useAutoNextStep;
