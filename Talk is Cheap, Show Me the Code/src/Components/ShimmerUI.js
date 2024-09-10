// const ShimmerUI = () => {
//   return (
//     <div className="shimmer-container">
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//     </div>
//   );
// };
// export default ShimmerUI;

const ShimmerUI = () => {
  return (
    <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card bg-gray-200 h-48 rounded-lg overflow-hidden relative"
          >
            <div className="shimmer-effect absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
