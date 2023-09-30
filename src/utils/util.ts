function combine(a: number, b: number, c: number) {
    return a * (b / c);
}

function transform(numberArray: number[]) {
    numberArray.map(item => {
        return {val: item}
    })
}

const user = {
    user: 'ajay',
    age: 20,
    getName() {
        let a = combine(1, 2, 3)
        return `${this.user} and ${this.age, a}`
    },
}

export {}