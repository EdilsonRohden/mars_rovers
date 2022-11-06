import { Command } from "../enum/commands"
import { DirectionEnum } from "../enum/DirectionEnum";

export class Direction {
    constructor(letter: string) {
        this.state = letter as DirectionEnum
    }
    private state: DirectionEnum;

    public getDirection(): DirectionEnum {
        return this.state;
    }
    public changeDirection(command: Command.L | Command.R) {
        switch (command) {
            case Command.L:
                this.changeDirectionToLeft();
                break
            case Command.R:
                this.changeDirectionToRight();
                break
        }
    }

    private changeDirectionToRight() {
        switch (this.state) {
            case DirectionEnum.E:
                this.state = DirectionEnum.S;
                break;
            case DirectionEnum.S:
                this.state = DirectionEnum.W;
                break;
            case DirectionEnum.W:
                this.state = DirectionEnum.N;
                break;
            case DirectionEnum.N:
                this.state = DirectionEnum.E;
                break;
        }
    }

    private changeDirectionToLeft() {
        switch (this.state) {
            case DirectionEnum.N:
                this.state = DirectionEnum.W;
                break;
            case DirectionEnum.W:
                this.state = DirectionEnum.S;
                break;
            case DirectionEnum.S:
                this.state = DirectionEnum.E;
                break;
            case DirectionEnum.E:
                this.state = DirectionEnum.N;
                break;
        }
    }
}
