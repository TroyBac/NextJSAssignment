"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
export default function Page() {
    return <div>
        <CountButton name={"Big"} mult={2} color={"Blue"}/><CountButton name={"Small"} mult={1} color={"Green"}/>
        <hr />
        <a href="https://github.com/TroyBac/NextJSAssignment">My Github Repo</a>
        <hr />
        <SearchBar />
    </div>
  }