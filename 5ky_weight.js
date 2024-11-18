function orderWeight(strng) {
    return strng
        .trim()
        .split(/\s+/) 
        .sort((a, b) => {
            const weightA = a.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
            const weightB = b.split('').reduce((sum, digit) => sum + parseInt(digit), 0);


            if (weightA !== weightB) {
                return weightA - weightB;
            }

            return a.localeCompare(b);
        })
        .join(' ');
}
