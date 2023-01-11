import "../fast.mjs"

export const test = ({Assert, Section}) => {
    Section `array`
    const array = []
    Assert(Array.is(array)).eq(true)

    Section `big int`
    const bigint = 0n
    Assert(BigInt.is(bigint)).eq(true)

    Section `bool`
    const bool = true
    Assert(Boolean.is(bool)).eq(true)

    Section `date`
    const date = new Date()
    Assert(Date.is(date)).eq(true)

    Section `error`
    const error = new Error("")
    Assert(Error.is(error)).eq(true)

    Section `map`
    const map = new Map()
    Assert(Map.is(map)).eq(true)

    Section `number`
    const number = 0
    Assert(Number.is(number)).eq(true)

    Section `regex`
    const regex = /test/
    Assert(RegExp.is(regex)).eq(true)

    Section `set`
    const set = new Set()
    Assert(Set.is(set)).eq(true)

    Section `string`
    const string = ""
    Assert(String.is(string)).eq(true)

    Section `error`
    const err = new Error("yup")
    Assert(Error.is(err)).eq(true)

    Section `prototype modification`
    const value = {}
    Reflect.setPrototypeOf(value, Number.prototype)
    Assert(Number.is(value)).eq(true)
}
