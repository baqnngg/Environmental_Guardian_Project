export default function PlasticSelector({ plastics, onSelect }) {
    return (
      <div className="flex gap-4 mb-4">
        {Object.keys(plastics).map((type) => (
          <button
            key={type}
            className="bg-blue-200 hover:bg-blue-300 rounded px-4 py-2"
            onClick={() => onSelect(type)}
          >
            {type} ({plastics[type].description})
          </button>
        ))}
      </div>
    );
  }
  