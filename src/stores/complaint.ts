import { conditions } from '@/app/home/constants';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Person = {
  firsName?: string;
  lastName?: string;
  email?: string;
};

const createInitialPerson = (): Person => ({
  firsName: '',
  lastName: '',
  email: '',
});

const initialCondition = conditions?.[0].label;

const stateFn = (set: any, get: any) => {
  return {
    condition: initialCondition,
    person: createInitialPerson(),
    treatment: '',
    details: '',
    setCondition: (condition: string) => {
      set({ condition });
    },
    setPerson: (person: Person) => {
      set((state: any) => ({ person: { ...state.person, ...person } }));
    },
    setTreatment: (treatment: string) => {
      set({ treatment });
    },
    setDetails: (details: string) => {
      set({ details });
    },
    resetPerson: () => {
      set({ person: createInitialPerson() });
    },
    resetOtherCondition: () => {
      set({
        person: createInitialPerson(),
        treatment: '',
        details: '',
      });
    },
    reset: () => {
      set({
        condition: initialCondition,
        person: createInitialPerson(),
        treatment: '',
        details: '',
      });
    },
  };
};

const useComplaint = create(
  persist(stateFn, {
    name: 'complaint',
    storage: createJSONStorage(() => localStorage),
  }),
);

export default useComplaint;
