import Form from 'next/form'
import SearchFormReset from './SearchFormReset'

const SearchForm = ({query}:{query?: string}) => {

  return (
    <Form className='search-form' action='/'>
        <input type="text"
        placeholder='Search Startups'
        name='query'
        className='search-input'
        defaultValue={query} 
        />

        <div className='flex gap-2'>
            {query && <SearchFormReset/>}
            <button type = 'submit' className='search-btn text-white'>S</button>
        </div>
    </Form>
  )
}

export default SearchForm