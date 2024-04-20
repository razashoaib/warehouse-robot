import { MAX_X, MAX_Y } from "./common/Constants";
import { Robot } from "./models/Robot";
import { CommandProcessor } from "./services/CommandProcessor";

const main = () : void => {
    const robot: Robot = new Robot(MAX_X, MAX_Y);
    const command: CommandProcessor = new CommandProcessor(robot);
    command.parseCommands("N E N E N E N E");
    console.log(robot.report()); // robot is in the middle of the grid
    // try {
    //     command.parseCommands("N E N E N E N E N E N E N E N E N E N E N E N E N E N E N E N E");
    // } catch (err) {
    //     console.log((err as Error).message); // robot is in the middle of the grid    
    // }
    
}

main();