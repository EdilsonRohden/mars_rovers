import { plateauFactory } from "../factory/plateauFactory";

export default function explore(inputData: string) {
    const plateau = plateauFactory(inputData)

    plateau.explore();
    return plateau.reportRoversPositions();
}