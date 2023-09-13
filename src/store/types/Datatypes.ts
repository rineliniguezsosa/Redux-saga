export type Counterprops = {
    value:number,
    increment:()=> void,
    decrementby:(num:number)=>void
}

export type Countervalue = Omit<Counterprops,"increment"|"decrementby">
