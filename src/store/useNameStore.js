import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useNameStore = create(persist((set)=>({
    number:0,
    setNumber:() => set((state)=>({number:state.number+1})),
}),{
    name:'useNumberStore',
}
));

export {useNameStore}