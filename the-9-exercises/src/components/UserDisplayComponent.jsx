export default function UserDisplayComponent({
    avatar,
    firstName,
    lastName,
    userName,
    gender,
    tel,
    email,
    employment,
    skill,
  }) {
    return (
      <div className="group h-96 w-80 [perspective:1000px] ">
        <div className="relative h-full bg-white w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-xl object-cover shadow-md shadow-black/40"
              src={avatar}
              alt="user avatar"
            />
            <div className="absolute bottom-0 group-hover:hidden bg-white w-full p-2 rounded-b-xl">
              <h1 className="font-bold py-2">
                {firstName} {lastName}
              </h1>
              <h1 className=" py-1">{employment}</h1>
            </div>
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/60 px-4 text-slate-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full justify-center flex-col p-1 relative">
              <h1 className="font-bold text-2xl top-3 absolute py-1">
                More Information
              </h1>
              <h1 className="text-lg py-1">
                <span className="font-bold">UserName:</span> {userName}
              </h1>
              <h1 className="text-lg py-1">
                <span className="font-bold">email:</span> {email}
              </h1>
              <p className="py-1">
                <span className="font-bold">Gender:</span> {gender}
              </p>
              <p className="py-1">
                <span className="font-bold">Tel:</span> {tel}
              </p>
              <p className="py-1">
                <span className="font-bold">Key skill:</span> {skill}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }