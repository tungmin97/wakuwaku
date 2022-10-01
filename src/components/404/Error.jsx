export default function Error() {
  return (
    <div className="font-sans bg-backgroundSecondary">
      <div className="flex flex-col mt-40 items-center">
        <div className="mt-5 text-9xl text-textPrimary">404</div>
        <p className="text-lg text-textSecondary">
          The page you are looking for doesn't exist :(
        </p>
      </div>
    </div>
  );
}
