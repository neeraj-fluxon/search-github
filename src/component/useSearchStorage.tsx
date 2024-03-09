
import React, { useState } from "react";
import { SearchResult } from "../models/SearchResult";

const key = "search";
export type SearchStorageContent = {
    history: SearchResult[],
    update:  (result:  SearchResult[]) => void,
    reset: () => void
}


export const SearchStorageContext = React.createContext<SearchStorageContent>(
    {
        history : [],
        update: (result:  SearchResult[]) =>{},
        reset: () => {}
    }
);

export const useSearchStorage = () => {
    const context = React.useContext(SearchStorageContext);
    if(!SearchStorageContext)
      throw new Error( 'useSearchStorage must used with SearchProvider');
    return context;
}
interface SearchStorageProviderProps {
    children: React.ReactNode;
  }

export const SearchStorageProvider:React.FC<SearchStorageProviderProps> = ({children}) => {
    const [history, setHistory] = useState<SearchResult[]>([]);
    const update = (result: SearchResult[]) : void => {
        console.log("saving:", result);
        history.concat(result);
        localStorage.setItem(key, JSON.stringify(history.concat(result)));
        setHistory(history.concat(result));
    }
    const reset = (): void => {
        console.log("reseting the search history"); 
        localStorage.clear();
        setHistory([]);
    }

    React.useEffect(() => {
        let searchResult:SearchResult[] = [];
        const storedHistory = localStorage.getItem(key);
        if(storedHistory) 
        {
            console.log("search history found :", storedHistory);
            let historyData = JSON.parse(storedHistory);
            historyData.forEach((element: SearchResult) => {
                searchResult.push(element);
            });
            setHistory(searchResult);
        }
    },[])

    return (
        <SearchStorageContext.Provider value={{history , update, reset}}>
            {children}
        </SearchStorageContext.Provider>
    );
}
