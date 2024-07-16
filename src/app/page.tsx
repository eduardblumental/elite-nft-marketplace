export default function Marketplace() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <div className="rounded border border-gray-800 px-4 py-2">
          <h1 className="text-xl font-bold">Collections</h1>
          <div></div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded border border-gray-800 px-4 py-2">
          <h1 className="text-xl font-bold">NFTs</h1>
          <div className="grid grid-cols-3 gap-4"></div>
        </div>
      </div>
    </div>
  );
}
