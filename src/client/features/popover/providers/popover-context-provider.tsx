import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type PopoverContext = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const Context = createContext<PopoverContext | null>(null);

export const usePopoverContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      '"usePopoverContext" must be called inside a "PopoverContextProvider"'
    );
  return context;
};

export const PopoverContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const context = useMemo<PopoverContext>(
    () => ({
      isOpen,
      open,
      close,
      toggle,
    }),
    [isOpen, open, close, toggle]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
