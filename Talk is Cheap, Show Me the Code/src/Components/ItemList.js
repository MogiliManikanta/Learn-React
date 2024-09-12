import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 flex justify-between items-center border-b border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="w-9/12">
            <div className="mb-2">
              <span className="font-semibold text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-gray-600 ml-2">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 relative flex justify-end items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <button className="absolute bottom-0 right-0 p-1.5 bg-green-500 text-white rounded-sm shadow-lg hover:bg-green-600 transition duration-200 text-sm">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
