import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form className="flex items-center gap-2 flex-1">
      <input type="text" placeholder="Search.." className="input input-accent" />
      <button type="submit" className="btn btn-circle bg-sky-700 text-white">
        <CiSearch/>
      </button>
    </form>
  )
}

export default SearchBar
