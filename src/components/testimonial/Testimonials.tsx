import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { testimonials } from "../../Data";
const Testimonials = () => {
  return (
    <section>
      <div className="py-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-white md:text-4xl">
          Kind Words From{" "}
          <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-200 bg-clip-text text-transparent ">
            Satisfied Clients
          </span>
        </h2>
        <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
