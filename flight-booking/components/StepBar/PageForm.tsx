import { ReactElement, useState } from "react";

export function PageForm(steps: ReactElement[]){
    const [currentstep,setcurrentstep] = useState(0);
    

    const nextForm = () =>{
        setcurrentstep(prevStep => {
            if(prevStep >=steps.length) return prevStep;
            return prevStep+1;
        } );
    }
    const displayEnding = () => {
        if(steps.length === currentstep){
            alert('Successful');
        }
        else{
            alert('Something went wrong');
        }
    }
    return {
        currentstep,
        steps,
        step: steps[currentstep],
        nextForm,
        displayEnding,
    }
}



