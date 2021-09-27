import { createContext, useState, useContext } from 'react'
import { QUESTIONS } from './data';
export const AppContext = createContext(undefined);

function AppStateProvider({children}) {
    const [name, setName] = useState("");
    
    const [totalScore, setTotalScore] = useState(0);
    const [connectScore, setConnectScore] = useState(0);
    const [takeNoticeScore, setTakeNoticeScore] = useState(0);
    const [keepLearningScore, setKeepLearningScore] = useState(0);
    const [beActiveScore, setBeActiveScore] = useState(0);
    const [giveScore, setGiveScore] = useState(0);
    
    const [questions, setQuestions] = useState(QUESTIONS);
    return (
        <AppContext.Provider
            value={{
                name,
                questions,
                totalScore,
                connectScore,
                takeNoticeScore,
                keepLearningScore,
                beActiveScore,
                giveScore,
                setName,
                setQuestions,
                setTotalScore,
                setConnectScore,
                setTakeNoticeScore,
                setKeepLearningScore,
                setBeActiveScore,
                setGiveScore,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used with a AppStateProvider");
    }
    return context;
}

export {AppStateProvider, useAppContext}