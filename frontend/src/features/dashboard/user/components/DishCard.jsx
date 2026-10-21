const dishCardLabels = {
  book: 'Book now',
  remove: 'Remove favourite',
};

const DishCard = ({ title, price, description, onBook, onRemove }) => {
  return (
    <article className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-[#1A1A1A] mb-1">{title}</h3>
        <div className="text-sm font-bold text-[#D4AF37] mb-2">₹{price}</div>
        <p className="text-xs text-stone-500 mb-4 line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
        <button 
          onClick={onBook} 
          className="flex-1 bg-[#D4AF37] hover:bg-[#c39e31] text-[#1A1A1A] text-xs font-semibold py-2 rounded-lg transition-colors"
        >
          {dishCardLabels.book}
        </button>
        <button 
          onClick={onRemove} 
          className="flex-1 text-stone-600 hover:text-red-600 text-xs font-medium py-2 transition-colors"
        >
          {dishCardLabels.remove}
        </button>
      </div>
    </article>
  );
};

export default DishCard;