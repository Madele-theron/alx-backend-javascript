interface MajorCredits {
    brand: string;
    credit: number;
}

interface MinorCredits {
    brand: string;
    credit: number;
}

function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits,
): MajorCredits {
    const sum = subject1.credit + subject2.credit;
    const creditObj: MajorCredits = {
        credit: sum,
        brand: "Major",
    }
    return creditObj;
}

function sumMinorCredits(
    subject1: MinorCredits,
    subject2: MinorCredits,
): MinorCredits {
    const sum = subject1.credit + subject2.credit;
    const creditObj: MajorCredits = {
        credit: sum,
        brand: "Minor",
    }
    return creditObj;
}
