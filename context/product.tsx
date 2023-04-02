import { useReducer, createContext, Dispatch, FunctionComponent, PropsWithChildren } from 'react';

type IContext<T extends {}, A extends { type: string; }> = [T, Dispatch<A>];

interface IProduct {
  count: number;
}

interface IAction {
  type: 'increment' | 'decrement';
}

const initState: IProduct = { count: 0 };

export const ProductContext = createContext<IContext<IProduct, IAction>>([
  initState,
  () => null
]);

const reducer = (state: IProduct, action: IAction) => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return {count: state.count - 1 };
    default:
      throw new Error('invalid type');
  }
};

export const ProductProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const sd = useReducer(reducer, initState);

  return (
    <ProductContext.Provider value={sd}>
      {children}
    </ProductContext.Provider>
  )
}