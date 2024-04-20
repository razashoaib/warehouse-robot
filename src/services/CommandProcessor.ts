import { RobotCommand } from "../enums/RobotCommand";
import { Robot } from "../models/Robot";

export class CommandProcessor {
    private robot: Robot;
    
    constructor(robot: Robot) {
        this.robot = robot;
    }

    parseCommands(commands: string): void {
        commands.split(' ').forEach(command => {
            switch (command) {
                case 'N':
                    this.robot.move(RobotCommand.NORTH);
                    break;
                case 'S':
                    this.robot.move(RobotCommand.SOUTH);
                    break;
                case 'E':
                    this.robot.move(RobotCommand.EAST);
                    break;
                case 'W':
                    this.robot.move(RobotCommand.WEST);
                    break;
                default:
                    throw new Error(`Wrong command type ${command}`);
            }
        });
    }

}