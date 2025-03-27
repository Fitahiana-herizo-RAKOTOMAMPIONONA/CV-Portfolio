export function Titre(props) {
  return (
    <div className="pt-5 pb-5">
      <div
        className={`uppercase font-semibold pt-5 pb-5 flex lg:text-2xl text-[#FF5733] ${props.className}`}
      >
        {props.title}
      </div>
      <div>
        {props.description}
      </div>
    </div>
  );
}
