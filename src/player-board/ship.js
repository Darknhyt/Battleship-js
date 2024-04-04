export function Ship(l = 0) {
    let len = l
    let hits = 0
    let coords = []
    const length = () => { return len }
    const getHits = () => { return hits }
    
    function itSunk(){
        return hits >= len
    }
    function hit(coord){
        for (const c of coords) {
            if(sameCoord(c.coord,coord) && !c.hit){
                c.hit = true
                hits++
                return true
            }
        }
        return false
    }
    function addCoord(coord){
        const shipPiece = {
            coord: coord,
            hit: false
        }
        coords.push(shipPiece)
    }
    function sameCoord(first, second){
        return first[0] == second[0] && first[1] == second[1]
    } 
    return { length, hit, getHits, itSunk, addCoord }
}