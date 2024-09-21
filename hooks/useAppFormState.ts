import { ActionResponse } from "@/types/basicTypes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";


export function useAppFormState(serverAction: (res: ActionResponse, formData: FormData) => Promise<ActionResponse>) {
    const [key, setKey] = useState('-');
    const [open, setOpen] = useState(false);

    const [res, action] = useFormState(serverAction, {});
    const modalProps = { open, onOpenChange: setOpen };

    useEffect(() => {
        if (res.success) {
            setKey(v => v + '-');
            setOpen(false);
        }
    }, [res])

    return {
        res,
        action,
        modalProps,
        key
    }
}