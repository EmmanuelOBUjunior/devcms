import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

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
            <button type = 'submit' className='search-btn text-white size-5'><Search/></button>
        </div>
    </Form>
  )
}

export default SearchForm