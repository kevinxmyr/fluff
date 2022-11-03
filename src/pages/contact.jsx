import  { contact as contactObj } from '@/data/contact'

const { contact, press, email, events, bookings, marketing } = contactObj

export const Contact = () => (
  <div className="bg-white flex text-black justify-between px-40">
    {/* <img src="src/assets/fluff-logo.jpeg" alt="" /> */}
    <div>
      <div className="uppercase">Contact Us</div>
    </div>
    <div>image of a bun</div>
  </div>
)

