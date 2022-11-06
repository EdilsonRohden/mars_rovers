import { evaluate } from '../src/port/stringPort'

test('Two rovers should move within the plateau', () => {
    const inputCommands = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM'

    const commandsResults = evaluate(inputCommands)

    expect(commandsResults).toHaveLength(2)
    expect(commandsResults).toEqual(['1 3 N', '5 1 E'])
});

test('It should stay within the plateau', () => {
    const inputCommands = '2 2\n1 2 N\nMLMMMM'

    const commandsResults = evaluate(inputCommands)

    expect(commandsResults).toHaveLength(1)
    expect(commandsResults).toEqual(['0 2 W'])
})

test('It should stay within the plateau', () => {
    const inputCommands = '2 2\n1 2 N\nMRMMMM'

    const commandsResults = evaluate(inputCommands)

    expect(commandsResults).toHaveLength(1)
    expect(commandsResults).toEqual(['2 2 E'])
})

test('It should fail with incomplete data', () => {
    const inputCommands = '5 5\n1 2 N'

    const commandsResults = evaluate(inputCommands)

    expect(commandsResults).toHaveLength(0)
})

test('It should procced when a hover doesn\'t have commands.', () => {
    const inputCommands = '5 5\n1 2 N\n\n3 3 E\nMMRMMRMRRM'

    const commandsResults = evaluate(inputCommands)

    expect(commandsResults).toHaveLength(2)
    expect(commandsResults).toEqual(['1 2 N', '5 1 E'])
})

test('Rover should not be deployed when outside the plateau', () => {
    const inputCommands = '5 5\n6 2 N\nLMLMLMLMM'

    const commandsResults = evaluate(inputCommands)

    expect(commandsResults).toHaveLength(0)
})