import { useEffect, useState } from "react"

const useDebounce = (value: string, delay = 500) => {
	const [debounceValue, setDebounceValue] = useState<string>('')

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounceValue(value)
		}, delay)

		return () => {
			clearTimeout(timeout)
		}
	}, [value, delay])

	return debounceValue
}

export {
	useDebounce
}