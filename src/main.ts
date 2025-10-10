import { startREPL } from "./repl.js";
import { initState } from "./state.js"
function main() {
    const pokeState = initState();
    startREPL(pokeState);    
}

main(); 