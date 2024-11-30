'use client'
const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement

    }
  return (
    <button type='reset' onClick={reset}></button>
  )
}

export default SearchFormReset