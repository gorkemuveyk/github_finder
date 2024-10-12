import SearchInput from "./components/SearchInput";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="flex flex-col sm:bg-red-300 md:bg-blue-300 lg:bg-purple-300 xl:bg-orange-300 2xl:bg-green-300 gap-10 justify-center items-center h-screen p-5 max-w-3xl mx-auto">
      <SearchInput />
      <UserInfo />
    </div>
  );
}

export default App;
