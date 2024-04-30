import { useState } from "react";


const Steps = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleStepClick = (stepNumber) => {
        setCurrentStep(stepNumber);
    };
    return (

        <div className="my-16 md:flex gap-8 items-center">
            <div><p className="text-3xl font-semibold">Need a Home Loan?</p>
                <p className="text-[#535353]">Select How much Home loan you can take</p></div>
            <div className="flex-grow ">
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((stepNumber) => (
                        <button
                            key={stepNumber}
                            onClick={() => handleStepClick(stepNumber)}
                            className={`flex-1 py-1 ${currentStep >= stepNumber
                                ? 'bg-[#8AB3DB] text-white'
                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                                }`}
                        >

                        </button>

                    ))}
                </div>
                <div className="flex justify-between text-[#535353]">
                    <p>$20K</p>
                    <p>$30K</p>
                    <p>$40K</p>
                    <p>$50K</p>
                    <p>$60K+</p>
                </div>
            </div>
        </div>

    );
};

export default Steps;