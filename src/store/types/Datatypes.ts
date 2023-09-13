export type Counterprops = {
    value:number,
    increment:()=> void,
    decrementby:()=>void
}

export type Countervalue = Omit<Counterprops,"increment"|"decrementby">
