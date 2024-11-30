import Form from 'next/form'

const SearchForm = () => {
    const query = 'Test'

    const reset = () => {
        
    }

  return (
    <Form className='search-form' action='/'>
        <input type="text"
        placeholder='Search Startup'
        name='query'
        className='search-input'
        defaultValue={query}
        />

        <div className='flex gap-2'>
            {query && (
                <button onClick={reset}></button>
            )}
        </div>
    </Form>
  )
}

export default SearchForm