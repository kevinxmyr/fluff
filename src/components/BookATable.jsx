import { Link } from 'react-router-dom'

export const BookATable = () => (
  <div className="bg-navbar p-index-margin py-32">
    <div className="grid gap-8 w-[30%]">
      <div className="uppercase font-bold text-4xl mb-4">book a table</div>
      <div className="font-rufina">
        Breakfast, lunch, or weekend brunch, we're always open for reservations.
      </div>
      <Link to="/book">
        <button className="bg-white text-black font-rufina px-10 py-4 text-sm">
          Book a table
        </button>
      </Link>
    </div>
  </div>
)