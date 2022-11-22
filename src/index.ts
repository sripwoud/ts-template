import {TEST} from "@mod/file";

const A = [1, 2, 3]

interface B {
    foo: string
}

const c: B = {foo: 'bar'}

console.log(A, c, TEST, 1)