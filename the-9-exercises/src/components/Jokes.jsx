export default function Jokes({ setup, punchline }) {
    return (
      <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-10">
        <h1 className="font-bold text-2xl">{setup}</h1>
        <p className="p-4">{punchline}</p>
      </div>
    );
  }