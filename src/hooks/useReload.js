import { useState } from 'react'

const useReload = () => {
    const [value, setValue] = useState(0);

    const reload = () => {
        setValue(e => e + 1)
    }

    return { reload, reloadable: value };
}

export default useReload;