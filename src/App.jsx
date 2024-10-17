import SearchInput from "./components/SearchInput";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen p-5 max-w-3xl mx-auto">
      <SearchInput />
      <UserInfo />
    </div>
  );
}

export default App;
