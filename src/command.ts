import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js";
import { CLICommand } from "./state.js";



export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit", 
            description: "Exits the pokedex", 
            callback: commandExit
        }, 
        help: {
            name: "help", 
            description: "Displays a help message", 
            callback: commandHelp
        }, 
        map: {
            name: "map",
            description: "Provides the next 20 location areas",
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Provides the previous 20 location areas",
            callback: commandMapB
        }
    }
}