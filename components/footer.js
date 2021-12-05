export default function Footer(props) {
  return (
    <footer className="flex w-full bg-green-500 py-4 m-0 items-center">
      <p className="m-auto text-xl font-semibold ">{props.locationsCount} Locations World Wide</p>
    </footer>
  );
}
