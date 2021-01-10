let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;

/* console.log(vAny.foo()); */
/* console.log(vUnknown.foo()); */
