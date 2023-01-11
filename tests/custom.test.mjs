import fast from "../fast.mjs"

export const test = ({Assert, Section}) => {
    Section `custom type`
    const thing = fast.register(
        () => thing.mark({ now: Date.now() })
    )
    const item = thing()
    Assert(item)
        (thing.is).eq(true)
        (Number.is).eq(false)
}
