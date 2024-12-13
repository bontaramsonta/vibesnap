import AddIcon from "../../assets/AddIcon.svg";

export function CreatePost() {
  return (
    <button className="fixed right-6 bottom-6 bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-colors">
      <img src={AddIcon} className="w-6 h-6" />
    </button>
  );
}
