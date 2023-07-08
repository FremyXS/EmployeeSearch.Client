export const convertSerialToNumber = (number: string) => {
    const parseNumber = number.split('-').join('');

    if (!Number(parseNumber)) {
        return false;
    }

    return parseNumber;
}

export const convertNumberToSerial = (number: string) => {

    if (!number.includes('-') && number.length % 2 === 0
        || number.includes('-') && number.length - number.lastIndexOf('-') == 3) {
        number = number + '-';
    }

    return number;
}