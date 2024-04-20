import { Robot } from "../models/Robot";
import { CommandProcessor } from "./CommandProcessor";

describe("Command Processor tests", () => {
    test("invalid command should throw an error", () => {
        const robot: Robot = new Robot(9,9);
        const comm: CommandProcessor = new CommandProcessor(robot);
        expect(() => comm.parseCommands("abcd")).toThrow("Wrong command type abcd");
    });

    test("valid command should not throw an error", () => {
        const robot: Robot = new Robot(9,9);
        const comm: CommandProcessor = new CommandProcessor(robot);
        expect(() => comm.parseCommands("N E E S W")).not.toThrow();
    });
})