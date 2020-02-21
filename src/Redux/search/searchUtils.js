export const searchInProfession = (genomeData, inputValue) =>{
    return genomeData.filter(person => person.professions
        .some(profession => profession.toUpperCase() === inputValue))
}

export const getAllProfessionArray = genomeData =>{
    const personsJob = genomeData.map(person => {
        return person.professions.map(profession =>profession)
    });
    const professions =  personsJob.reduce(
        (arr, elem) => arr.concat(elem), []
    );
    return professions.filter((v, i, a) => a.indexOf(v) === i)
}