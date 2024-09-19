import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

export type MetricOption = 'leads' | 'applications' | 'deals' | 'sales';

type MetricContext = {
  selected: MetricOption;
  setSelected: Dispatch<SetStateAction<MetricOption>>;
};

const Context = createContext<MetricContext | null>(null);

export const titles: Record<MetricOption, string> = {
  leads: 'New Leads',
  applications: 'New Applications',
  deals: 'Closed Deals',
  sales: 'Sales',
};

export const useMetricContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      '"useMetricContext" must be called inside a "MetricContextProvider"'
    );
  return context;
};

export const MetricContextProvider = ({ children }: PropsWithChildren) => {
  const [selected, setSelected] = useState<MetricOption>('leads');

  const context = useMemo<MetricContext>(
    () => ({
      selected,
      setSelected,
    }),
    [selected, setSelected]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
