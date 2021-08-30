import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from './model';

const { useStoreActions, useStoreState, useStore } = createTypedHooks<StoreModel>();

export const useAppActions = useStoreActions;
export const useAppStore = useStoreState;


