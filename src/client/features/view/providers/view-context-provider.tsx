import {
  createContext, type Dispatch,
  type PropsWithChildren, type SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

type ViewContext = {
  data: string[][];
  setData: Dispatch<SetStateAction<string[][]>>;
  sortBy: number;
  setSortBy: Dispatch<SetStateAction<number>>;
  filterBy: number[];
  setFilterBy: Dispatch<SetStateAction<number[]>>;
  viewBy: number;
  setViewBy: Dispatch<SetStateAction<number>>;
};

const Context = createContext<ViewContext | null>(null);

export const useViewContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      '"useViewContext" must be called inside a "ViewContextProvider"'
    );
  return context;
};

interface ViewContextProviderProps {
  defaultData?: string[][];
}

export const ViewContextProvider = ({ defaultData = [[]], children }: PropsWithChildren<ViewContextProviderProps>) => {
  const [data, setData] = useState<string[][]>(defaultData);
  const [sortBy, setSortBy] = useState<number>(0);
  const [filterBy, setFilterBy] = useState<number[]>([]);
  const [viewBy, setViewBy] = useState<number>(0);

  const context = useMemo<ViewContext>(() => ({
    data,
    setData,
    sortBy,
    setSortBy,
    filterBy,
    setFilterBy,
    viewBy,
    setViewBy,
  }), [
    data,
    setData,
    sortBy,
    setSortBy,
    filterBy,
    setFilterBy,
    viewBy,
    setViewBy,
  ]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
