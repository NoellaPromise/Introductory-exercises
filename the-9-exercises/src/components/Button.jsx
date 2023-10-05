// eslint-disable-next-line react/prop-types
export default function Button({ id, clickHandle }) {
  return (
    <button
      className="text-2xl text-amber-100 bg-green-900 hover:bg-slate-400 active:bg-slate-700 px-8 py-4 rounded-lg"
      onClick={() => clickHandle(id)}
    >
      Button {id}
    </button>
  );
}
