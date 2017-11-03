import { filterByCompleted, sortByContent } from '../taskSelector';

describe('taskSelector', () => {
  it('should filter out complete tasks', () => {
    const mockTasks = [
        { isComplete: true },
        { isComplete: false },
        { isComplete: false }
    ];
    const result = filterByCompleted(mockTasks);
    expect(result).toHaveLength(2);
  });
  it('should sort by content alphabetically', () => {
    const mockTasks = [
        { content: 'Z' },
        { content: 'T'},
        { content: 'A'}
    ];
    const expected = [
        { content: 'A' },
        { content: 'T'},
        { content: 'Z'}
    ]
    const result = sortByContent(mockTasks);
    expect(result).toEqual(expected);
  });
});
