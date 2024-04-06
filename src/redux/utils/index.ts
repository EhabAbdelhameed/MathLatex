import { AnyAction } from "@reduxjs/toolkit"

const getActionMainType: Function = (action: AnyAction) => {
    const typeParts = (action as any).type.split("/");
    typeParts.pop();
    typeParts.join("/");
}

export {
    getActionMainType
}