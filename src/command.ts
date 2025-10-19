import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandCatch } from "./command_catch.js";
import { CLICommand } from "./state.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";



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
        },
        explore: {
            name: "explore",
            description: "Provides a list of pokemon from the given location",
            callback: commandExplore
        }, 
        catch: {
            name: "catch", 
            description: "Attempt to catch the given pokemon", 
            callback: commandCatch
        }, 
        inspect: {
            name: "inspect", 
            description: "Inspect the given pokemon", 
            callback: commandInspect
        }, 
        pokedex: {
            name: "pokedex", 
            description: "List all of your pokemon", 
            callback: commandPokedex
        }, 
    };
};