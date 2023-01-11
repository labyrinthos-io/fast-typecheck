const fastType = Symbol("fast type")

const register = (func) => {
    const typeSymbol = Symbol(func.name ?? "")
    func[fastType] = typeSymbol
    func.mark = (value) => mark(value, func)
    func.is = (value) => is(value, func)
    return func
}
const registerClass = (constructor) => {
    const typeSymbol = Symbol(constructor.name)
    Object.defineProperty(
        constructor.prototype,
        typeSymbol,
        {
            enumerable: false,
            writable: false,
            value: true
        }
    )
    constructor[fastType] = typeSymbol
    constructor.is = (value) => is(value, constructor)
    return constructor
}

const mark = (value, func) => {
    Object.defineProperty(
        value,
        func[fastType],
        {
            enumerable: false,
            writable: false,
            value: true
        }
    )
    return value
}
const is = (value, type) => {
    if (value === undefined || value === null) {
        return false
    }
    const sym = type[fastType]
    if (sym === undefined) {
        return false
    }
    return value[sym] === true
}

registerClass(Array)
registerClass(BigInt)
registerClass(Boolean)
registerClass(Date)
registerClass(Error)
registerClass(Map)
registerClass(Number)
registerClass(RegExp)
registerClass(Set)
registerClass(String)
registerClass(Error)

export default {
    register,
    registerClass,
    mark,
    is,
}
