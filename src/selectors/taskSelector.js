// Could memoize here to optimize performance
export function filterByCompleted(tasks){
    return tasks.filter((task) => task.isComplete === false);
}
export function sortByContent(tasks){
    return tasks.sort((a, b) => {
        const textA = a.content.toUpperCase();
        const textB = b.content.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
}