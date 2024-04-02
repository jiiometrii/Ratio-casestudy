export const handleSelectionChange = (selection, onSelectionChange) => {
    console.log('Current selection:', selection);
    let genderOptions = [];
    if (selection.both) {
        genderOptions = ['men', 'female'];
    } else if (selection.men) {
        genderOptions = ['men'];
    } else if (selection.female) {
        genderOptions = ['female'];
    }

    onSelectionChange(genderOptions);
};