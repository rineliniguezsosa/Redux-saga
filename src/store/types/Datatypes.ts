export type Counterprops = {
    value:number,
    increment:()=> void,
    decrementby:(num:number)=>void,
    getcatsfetch:()=>void
}

export type Countervalue = Omit<Counterprops,"increment"|"decrementby">
