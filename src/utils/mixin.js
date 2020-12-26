import  eventbus from "./eventbus"
export const  mixin={
    created() {
       eventbus.$emit("watchTab",window)
    },
}