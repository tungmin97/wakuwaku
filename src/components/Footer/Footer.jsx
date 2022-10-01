export default function Footer() {
  return (
    <footer>
      <div className="bg-backgroundPrimary items-center mx-auto">
        <div className="space-y-2 md:space-y-0 flex py-6 text-sm text-neutral-400 justify-center">
          {`</> with 💗 by`}&nbsp;
          <a
            className=" text-textPrimary dark:hover:text-textSecondary"
            href="https://nierdod.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rivon
          </a>
        </div>
      </div>
    </footer>
  );
}
