interface Pokemon {
    name: string,
    level: number,
    ability: string,
    moves: string[]
    types: string[]
    id: number,
    trainer?: any,
    _id?: any,
    releasePokemon?: any
}

export default Pokemon;