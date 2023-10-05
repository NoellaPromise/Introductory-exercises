export default function AnimalList({id, image, name}) {
    return (
      <div
        className="py-1 flex border items-center gap-7 w-1/3 justify-center"
        key={id}
      >
        <img src={image} alt={`${name} image`} width="70px" />
        <span>{name}</span>
      </div>
    );
  }