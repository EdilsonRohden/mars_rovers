import { plateauFactory } from '../factory/plateauFactory'

export function evaluate(inputFile: string): Array<string> {
    const plateau = plateauFactory(inputFile)

    plateau.explore();
    return plateau.reportRoversPositions();
}
