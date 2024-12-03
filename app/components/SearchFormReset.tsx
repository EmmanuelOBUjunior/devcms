'use client'

import Link from "next/link"

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement

    }
  return (
    <button type='reset' onClick={reset}>
        <Link href='/'className="search-btn text-white">x</Link>
    </button>
  )
}

export default SearchFormReset